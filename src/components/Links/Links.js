import React from "react";
import "../../blocks/header/links.css";

function Links(props) {
  return (
      <li className={ props.hidden ? `headerLinksListItem headerLinksListItemHidden` : 'headerLinksListItem '}>
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
