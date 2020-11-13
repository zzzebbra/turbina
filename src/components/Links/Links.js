import React from "react";
import "./links.css";

function Links(props) {
  return (
      <li className={ props.hidden ? `headerLinksListItem` : 'headerLinksListItem  headerLinksListItemHidden'}>
        <a
          href={props.link}
          className="headerLink"
          target="_blank"
        >
         {props.title}
        </a>
      </li>
  );
}

export default Links;
