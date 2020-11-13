import React from "react";
import "./links.css";

function Links(props) {

  return (
      <li className={props.windowWidth > 480 || (props.windowWidth <= 480 && props.menu) ? `headerLinksListItem` : 'headerLinksListItem  headerLinksListItemHidden'}>
        <a
          href={props.link}
          className="headerLink"
          target="blank"
        >
         {props.title}
        </a>
      </li>
  );
}

export default Links;
