import React from 'react';
import './playerWindow.css';

const PlayerWindow = () => {

  return (
    <div className="player__play-window">
    <p className="player__track-name">Track Name</p>
    <p className="player__track-duration">00:00</p>
    <div className="player__scroll">
      <div className="player__scroll-duration"></div>
    </div>
  </div>
  )
}

export default PlayerWindow;