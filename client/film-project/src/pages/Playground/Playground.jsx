import React from "react";

const Playground = () => {
    document.cookie = "test1=Hello; SameSite=None; Secure";
    document.cookie = "test2=World; SameSite=None; Secure";

    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("test2="))
        ?.split("=")[1];

    function showCookieValue() {
        const output = document.getElementById("cookie-value");
        output.textContent = `> ${cookieValue}`;
    }

    function clearOutputCookieValue() {
        const output = document.getElementById("cookie-value");
        output.textContent = "";
    }

    return (
        <div className=''>
            <button className='block border' onClick={showCookieValue}>
                Show Cookies
            </button>
            <button onClick={clearOutputCookieValue}>Clear Cookies</button>
            <div id='cookie-value'></div>
        </div>
    );
};

export default Playground;
