import React from 'react';
import defaultTexts from '../../../data/defaultTexts';
import './playerWindow.css';

const PlayerWindow = props => {
  let playStatus = props.playStatus;
  let currentTrack = props.currentTrack;
  const player = React.useRef();
  const timer = React.useRef();
  const scroll = React.useRef();
  const scrollBar= React.useRef();


  React.useEffect(() => {
    !!playStatus ? player.current.play() : player.current.pause();
  }, [playStatus])


  const setTime = () => {
    let minutes = Math.floor((player.current.duration - player.current.currentTime) / 60);
    let seconds = Math.floor((player.current.duration - player.current.currentTime) - minutes * 60);
    let minuteValue;
    let secondValue;
    (minutes < 10) ? (minuteValue = '0' + minutes) : (minuteValue = minutes);
    (seconds < 10) ? (secondValue = '0' + seconds) : (secondValue = seconds);
    let mediaTime = minuteValue + ':' + secondValue;
    timer.current.textContent = (isNaN(player.current.duration) ? '' :  mediaTime);

    let scrollLength = scrollBar.current.clientWidth * (player.current.currentTime/player.current.duration);
    scroll.current.style.width = scrollLength + 'px';
  }

  const trackTimeChange = (e) => {
    console.log('div.offsetLeft - ' + scrollBar.current.offsetLeft);
    console.log('div.offsetX - ' + scrollBar.current.offsetX);
    console.log('div.clientX - ' + scrollBar.current.clientX);
    console.log('event.clientX - ' + e.clientX);
    console.log('event.offsetX - ' + e.offsetX);
    console.log('div.getBoundingClientRect().left - ' + scrollBar.current.getBoundingClientRect().left);

    let scrollWidth = e.clientX - scrollBar.current.getBoundingClientRect().left;
    player.current.currentTime = (player.current.duration * scrollWidth) / scrollBar.current.clientWidth;
    scroll.current.style.width = scrollWidth + 'px';
  }

  const scrollBarElement = document.querySelector('.player__scroll');
  if (scrollBarElement !== null) {
    scrollBarElement.addEventListener('click', ((event) => {
      console.log('test event offsetX - ' + event.offsetX);
      console.log('test event clientX - ' + event.clientX);
    }))
  }



  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <p className="player__track-name">{currentTrack.length !== 0 ? currentTrack.name : ''}</p>
        <p className="player__track-duration" ref={timer}></p>
        <div className="player__scroll" ref={scrollBar} onClick={trackTimeChange}>
          <div className="player__scroll-duration" ref={scroll}></div>
        </div>
      </div>
      <audio ref={player} src={currentTrack.src} type="audio/mp3" onTimeUpdate={setTime} onLoadedData={setTime} />
      <button className={!props.visibility ?
      'player__info-switcher player__info-switcher_hidden' :
      'player__info-switcher'} onClick={props.setTitle} >{props.titleMode === 'releases' ?
      defaultTexts.playerInfoButton.releaseMode :
      defaultTexts.playerInfoButton.textMode}</button>
    </div>
  )
}

export default PlayerWindow;
