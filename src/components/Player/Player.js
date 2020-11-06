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
  const [media, setMedia] = React.useState(undefined);

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
    if (!play) {
      setPlay(true);
      media.play();
    } else {
      setPlay(false);
      media.pause();
    }
  }

  const trackSelector = (e) => {
    if (media !== undefined) { 
      media.pause();
      media.currentTime = 0;
      setPlay(false); 
    };
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
    setMedia(document.getElementById(selectedTrack.id).querySelector('audio'));
  }


  return (
    <section className="player">
      <div className={!visibility ? 'player__wrapper player__wrapper_hidden' : 'player__wrapper player__wrapper_visible'}>
        <button className={!play ? 
          'player__play-button player__play-button_play' : 
          'player__play-button player__play-button_pause'} onClick={currentTrack.length !== 0 ? playToggler : undefined} />
        <PlayerWindow visibility={visibility} data={currentTrack} playStatus={play} currentMedia={media}/>
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