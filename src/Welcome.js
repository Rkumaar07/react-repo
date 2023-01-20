import React, { useState } from "react";


function Welcome() {
    const [Name, setName] = useState("Rohit Kumar");
    const handleClick = (e) => {
        e.preventDefault();
        const showName = `<h1>Hey! ${Name}</h1><br><h3>Welcome to LPU college</h3>`;
        document.getElementById("showName").innerHTML = showName;
    };
    const handleChange = (event) => {
        const newName = event.target.value;
        setName(newName);
    };
    return (
        <center>
            <form>
                <label htmlFor="fname" className="mx-2">
                    Enter your name:
                </label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={handleChange}
                    value={Name}
                />
                <button
                    className="btn btn-sm mx-2 border border-5 text-body-emphasis"
                    onClick={handleClick}
                >
                    Login
                </button>
            </form>
            <br />
            <br />
            <div id="showName"></div>
            <p>Assignment done by Rohit Kumar 12010323</p>
        </center>
    );
}
export default Welcome;