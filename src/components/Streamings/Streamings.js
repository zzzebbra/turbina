import React from "react";
import "./streamings.css";

function Streamings (props) {
  return (
      <li className={ props.windowWidth <= 480 && !props.menu ? 'headerStreamItem' : 'headerStreamItem  headerStreamItemHidden'}>
        <button
          className="headerButton"
          onClick = {props.menuToggler}
        >
         {props.title}
        </button>
      </li>
  );
}

export default Streamings;

