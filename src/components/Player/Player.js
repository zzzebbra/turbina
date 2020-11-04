import React from 'react';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import audioData from '../../data/audioData';
import './player.css';

const Player = () => {
  const [visibility, setVisibility] = React.useState(true);
  const [play, setPlay] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);
  const [currentTrack, setCurrentTrack] = React.useState([]);
  console.log(currentTrack);

  React.useEffect(() => {
    setTracks(audioData.map((i) => ({
      id: i.id,
      name: i.name,
      src: i.src,
    })))
  }, [])

  const showToggler = () => {
    setVisibility(!visibility);
  }

  const playToggler = () => {
    setPlay(!play);
  }

  const trackSelector = (e) => {
    setCurrentTrack(tracks.find((i) => {
      console.log('ID-' + i.id);
      return (i.id === e.target.id.toNumber);
    }));
    console.log(tracks);
    console.log(e.target.id);
    console.log(e.target);
  }

  return (
    <section className="player">
      {currentTrack !== undefined && 
        <audio>
          <source src={currentTrack.src} type="audio/mp3"/> 
        </audio>
      }
      <div className={!visibility ? 'player__wrapper player__wrapper_hidden' : 'player__wrapper player__wrapper_visible'}>
        <button className={!play ? 
          'player__play-button player__play-button_play' : 
          'player__play-button player__play-button_pause'} onClick={playToggler} />
        <PlayerWindow visibility={visibility} data={currentTrack} />
        <button className={!visibility ? 
          'player__hide-switcher player__hide-switcher_open' : 
          'player__hide-switcher player__hide-switcher_close' }
          onClick={showToggler} />
        <PlayerInfo data={tracks} selector={trackSelector} />
      </div>  
    </section>
  )
}

export default Player;