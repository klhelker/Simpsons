import React from "react";
import "./style.css";

const NavBar = (props) => (
 <nav className="navbar navbar-sticky">
     <div className="navbar--logo-holder">
         <h1>Simpson's Memory Game</h1>
         </div>
    <ul className="navbar--link">
        <li>{props.message}</li>
        <li>{props.score} || {props.score}</li>
        
    </ul>
 </nav>
)


export default NavBar
