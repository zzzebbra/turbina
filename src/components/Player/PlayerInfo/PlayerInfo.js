import React from 'react';
import './playerInfo.css';

const PlayerInfo = () => {

  return (
    <article className="player__info">
      <ul className="player__list">
        <p className="player__list-title">Релизы</p>
        <li className="player__list-item">Track 1</li>
        <li className="player__list-item">Track 2</li>
        <li className="player__list-item">Track 3</li>
        <li className="player__list-item">Track 4</li>
        <li className="player__list-item">Track 5</li>
        <li className="player__list-item">Track 6</li>
      </ul>
      <div className="player__list-scroll">
        <div className="player__list-slider" />
      </div>
    </article>
  )
}

export default PlayerInfo;
