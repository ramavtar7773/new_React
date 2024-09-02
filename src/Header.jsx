import React from "react";

import './Header.css'

function Header(){
    return(
        <>

        <div>
            <input type="text" placeholder="search here" />
            <button>log in</button>
            <li>home</li>
            <li>about</li>
            <li>service</li>
        </div>
        </>
    )
}

export default Header;