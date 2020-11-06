import React from "react";
import "./links.css";

function Links() {
  return (
    <ul className="headerLinksList">
      <li className="headerLinksListItem">
        <a
          href="https://music.yandex.ru/home"
          className="headerLink"
          target="blanc"
        >
          Яндекс.Музыка ↗
        </a>
      </li>
      <li className="headerLinksListItem">
        <a
          href="https://www.spotify.com/ru-ru/"
          className="headerLink"
          target="blanc"
        >
          Spotify ↗
        </a>
      </li>
      <li className="headerLinksListItem">
        <a
          href="https://music.apple.com/ru/browse"
          className="headerLink"
          target="blanc"
        >
          Apple Music ↗
        </a>
      </li>
      <li className="headerLinksListItem">
        <a href="https://vk.com/vkmusic" className="headerLink" target="blanc">
          VK Music ↗
        </a>
      </li>
    </ul>
  );
}

export default Links;
