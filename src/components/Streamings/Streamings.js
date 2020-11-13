import React from "react";
import "../../blocks/header/streamings.css";

function Streamings (props) {
  if(props.hidden){
    return (
      <li className='headerListItem1'>
        <button
        type="button"
          onClick={props.onClick}
          className="header__close-button"
        >
        </button>
      </li>
  );
  }
  return (
      <li className={ props.hidden ? 'headerListItem  headerListItemHidden': `headerListItem` }>
        <button
        type="button"
          onClick={props.onClick}
          className="headerButton"
        >
         {props.title}
        </button>
      </li>
  );
}

export default Streamings;

