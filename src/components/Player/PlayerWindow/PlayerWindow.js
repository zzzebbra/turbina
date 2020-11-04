import React from 'react';
import './playerWindow.css';

const PlayerWindow = props => {
  let media = document.querySelector('audio');
  let mediaTime = '00:00';
  const setTime = () => {
    if (!media) return;
    let minutes = Math.floor((media.duration - media.currentTime) / 60);
    let seconds = Math.floor(((media.duration - media.currentTime) - minutes) / 60);
    let minutesValue = minutes < 10 ? '0' + minutes : minutes;
    let secondsValue = seconds < 10 ? '0' + seconds : seconds;
    mediaTime = minutesValue + ':' + secondsValue;
  }
  media !== null && media.addEventListener('timeUpdate', setTime);

  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <p className="player__track-name">{props.data !== undefined ? props.data.name : ''}</p>
        <p className="player__track-duration">{mediaTime}</p>
        <div className="player__scroll">
          <div className="player__scroll-duration"></div>
        </div>
      </div>
      <button className={!props.visibility ? 
      'player__info-switcher player__info-switcher_hidden' : 
      'player__info-switcher'}>Релизы</button>
    </div>
  )
}

export default PlayerWindow;