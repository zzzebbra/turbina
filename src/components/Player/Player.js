import React from 'react';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import './player.css';

const Player = () => {
  const [visibility, setVisibility] = React.useState(true);
  const [play, setPlay] = React.useState(true);

  const showToggler = () => {
    setVisibility(!visibility);
  }

  const playToggler = () => {
    setPlay(!play);
  }

  return (
    <section className="player">
      <div className={!visibility ? 'player__wrapper player__wrapper_hidden' : 'player__wrapper player__wrapper_visible'}>
        <button className={!play ? 
          'player__play-button player__play-button_play' : 
          'player__play-button player__play-button_pause'} onClick={playToggler} />
        <PlayerWindow visibility={visibility} />
        <button className={!visibility ? 
          'player__hide-switcher player__hide-switcher_open' : 
          'player__hide-switcher player__hide-switcher_close' }
          onClick={showToggler} />
        <PlayerInfo />
      </div>  
    </section>
  )
}

export default Player;