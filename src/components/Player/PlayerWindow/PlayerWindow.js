import React from 'react';
import './playerWindow.css';

const PlayerWindow = props => {
  const media = props.currentMedia;
  let timer = document.querySelector('.player__track-duration');
  let scroll = document.querySelector('.player__scroll-duration');
  let scrollBar = document.querySelector('.player__scroll');

  const setTime = () => {
    let minutes = Math.floor((media.duration - media.currentTime) / 60);
    let seconds = Math.floor((media.duration - media.currentTime) - minutes * 60);
    let minuteValue;
    let secondValue;
    (minutes < 10) ? (minuteValue = '0' + minutes) : (minuteValue = minutes);
    (seconds < 10) ? (secondValue = '0' + seconds) : (secondValue = seconds);
    let mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;
  
    let scrollLength = scrollBar.clientWidth * (media.currentTime/media.duration);
    scroll.style.width = scrollLength + 'px';
  }
  
  if (media !== undefined) {
    media.addEventListener('timeupdate', setTime);
  };


  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <p className="player__track-name">{props.data !== undefined ? props.data.name : ''}</p>
        <p className="player__track-duration"></p>
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