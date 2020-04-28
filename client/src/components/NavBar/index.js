import React from "react";
import "./style.css";

const NavBar = (props) => (
 <nav className="navbar navbar-sticky">
     <div className="navbar--logo-holder">
         <h1>Simpson's Memory Game</h1>
         </div>
    <div className="navbar--link col-4"></div>

        <h2>{props.message}</h2>
        <h3>{props.score} || {props.score}</h3>
        
    
 </nav>
)


export default NavBar
