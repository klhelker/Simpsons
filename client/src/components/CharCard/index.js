import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick= {props.handleClick} >
        <img alt={props.name} src={props.image} key={props.id} />
        </div>
  
    </div>
  );
}

export default CharCard;