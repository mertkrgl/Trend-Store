import "./Header.css" 
import React from "react"

import HeaderCartButton from "./HeaderCartButton"

const Header = ({onShowCart}) => {
    return (
        <header className="header">
            <h1>Trend Mağaza</h1>
            <HeaderCartButton onShowCart={onShowCart}/>
            
        </header>
    )
}

export default Header