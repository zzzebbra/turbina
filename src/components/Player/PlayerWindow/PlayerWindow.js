import React from 'react';
import defaultTexts from '../../../data/defaultTexts';
import './playerWindow.css';

const PlayerWindow = props => {
  const media = props.currentMedia;
  let playStatus = props.playStatus;
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

  const trackTimeChange = (e) => {
    let scrollWidth = (e.offsetX === undefined ? e.layerX : e.offsetX);;
    media.currentTime = (media.duration * scrollWidth) / scrollBar.clientWidth;
    scroll.style.width = scrollWidth + 'px';
  }

  if (!!playStatus) {
    scrollBar.addEventListener('click', trackTimeChange);
  };
  
  if (media !== undefined) {
    media.addEventListener('timeupdate', setTime);
  };


  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <p className="player__track-name">{props.data.length !== 0 ? props.data.name : 'Выберите релиз'}</p>
        <p className="player__track-duration"></p>
        <div className="player__scroll">
          <div className="player__scroll-duration"></div>
        </div>
      </div>
      <button className={!props.visibility ? 
      'player__info-switcher player__info-switcher_hidden' : 
      'player__info-switcher'} onClick={props.setTitle} >{props.titleMode == 'releases' ? 
      defaultTexts.playerInfoButton.releaseMode : 
      defaultTexts.playerInfoButton.textMode}</button>
    </div>
  )
}

export default PlayerWindow;