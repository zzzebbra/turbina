import React from "react";
import "./streamings.css";

function Streamings (props) {
  return (
      <li className={ props.hidden ? `headerListItem` : 'headerListItem  headerListItemHidden'}>
        <button
          className="headerButton"
        >
         {props.title}
        </button>
      </li>
  );
}

export default Streamings;

