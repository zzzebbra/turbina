import React from 'react';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import './player.css';

const Player = () => {
  return (
    <section className="player">
      <div className="player__wrapper">
        <button className="player__play-button" />
        <PlayerWindow />
        <button className="player__info-switcher">Релизы</button>
        <button className="player__hide-switcher" />
        <PlayerInfo />
      </div>  
    </section>
  )
}

export default Player;