import React, { useState, useEffect } from "react";

function App() {
    const [val, setVal] = useState("");
    const [check, setCheck] = useState(false);

    const handleChange = (e) => {
        setVal(e.target.value);
    };

    useEffect(() => {
        // console.log("test");
        fetch("https://reqres.in/api/users?page=1")
            .then((res) => res.json())
            .then((data) => {
                data.data.map((entry) => {
                    if (
                        val.includes(entry.first_name.toLowerCase()) ||
                        val.includes(entry.last_name.toLowerCase())
                    ) {
                        setVal(entry.email);
                        setCheck(true);
                    }
                });
            });
    }, [val]);

    return (
        <div className="container-fluid">
            <div className="navbar h3 text-white bg-dark">
                <div>Search Bar</div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <input
                        placeholder="Type something here..."
                        className="form-control"
                        name="search"
                        onChange={handleChange}
                    ></input>
                    {/* <button className="btn btn-primary m-3">Submit</button> */}

                    <ul className="list-group">
                        <div className="text-center list-group-item">
                            {check ? val : "Fetching..."}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
