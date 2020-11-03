import React from 'react';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import './player.css';

const Player = () => {
  return (
    <section className="player">
      <div className="player__wrapper">
        <button className="player__play-button player__play-button_pause" />
        <PlayerWindow />
        <button className="player__hide-switcher player__hide-switcher_close" />
        <PlayerInfo />
      </div>  
    </section>
  )
}

export default Player;