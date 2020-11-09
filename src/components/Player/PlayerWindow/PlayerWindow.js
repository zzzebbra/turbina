import React from 'react';
import defaultTexts from '../../../data/defaultTexts';
import './playerWindow.css';

const PlayerWindow = props => {
  const media = props.currentMedia;
  let playStatus = props.playStatus;
  let currentTrack = props.currentTrack;
  // let timer = document.querySelector('.player__track-duration');
  let scroll = document.querySelector('.player__scroll-duration');
  let scrollBar = document.querySelector('.player__scroll');
  const playerRef = React.useRef();
  const timerRef = React.useRef();
  const scrollRef = React.useRef();


  React.useEffect(() => {
    !!playStatus ? playerRef.current.play() : playerRef.current.pause();
  }, [playStatus])


  const setTime = () => {
    let minutes = Math.floor((playerRef.current.duration - playerRef.current.currentTime) / 60);
    let seconds = Math.floor((playerRef.current.duration - playerRef.current.currentTime) - minutes * 60);
    let minuteValue;
    let secondValue;
    (minutes < 10) ? (minuteValue = '0' + minutes) : (minuteValue = minutes);
    (seconds < 10) ? (secondValue = '0' + seconds) : (secondValue = seconds);
    let mediaTime = minuteValue + ':' + secondValue;
    timerRef.current.textContent = (playerRef.current.duration === NaN ? '' :  mediaTime);

    let scrollLength = scrollBar.clientWidth * (playerRef.current.currentTime/playerRef.current.duration);
    scroll.style.width = scrollLength + 'px';
  }

  const trackTimeChange = (e) => {
    let scrollWidth = (e.offsetX === undefined ? e.layerX : e.offsetX);
    playerRef.current.currentTime = (playerRef.current.duration * scrollWidth) / scrollBar.clientWidth;
    scrollRef.current.style.width = scrollWidth + 'px';
  }


  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <p className="player__track-name">{currentTrack.length !== 0 ? currentTrack.name : ''}</p>
        <p className="player__track-duration" ref={timerRef}></p>
        <div className="player__scroll" onClick={trackTimeChange}>
          <div className="player__scroll-duration" ref={scrollRef}></div>
        </div>
      </div>
      <audio ref={playerRef} src={currentTrack.src} type="audio/mp3" onTimeUpdate={setTime} onLoadedData={setTime} />
      <button className={!props.visibility ?
      'player__info-switcher player__info-switcher_hidden' :
      'player__info-switcher'} onClick={props.setTitle} >{props.titleMode === 'releases' ?
      defaultTexts.playerInfoButton.releaseMode :
      defaultTexts.playerInfoButton.textMode}</button>
    </div>
  )
}

export default PlayerWindow;
