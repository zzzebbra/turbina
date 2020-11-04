import React from 'react';
import './playerInfo.css';

const PlayerInfo = props => {

  return (
    <article className="player__info">
      <ul className="player__list">
        <p className="player__list-title">Релизы</p>
        {props.data.map((item) => (
          <li key={item.id} id={item.id} src={item.src} className="player__list-item" onClick={props.selector}>{item.name}</li>
        ))}
      </ul>
      <div className="player__list-scroll">
        <div className="player__list-slider" />
      </div>
    </article>
  )
}

export default PlayerInfo;
