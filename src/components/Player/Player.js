import React from 'react';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import audioData from '../../data/audioData';
// import singleData from '../../data/singleData';
import './player.css';

const Player = () => {
  const [visibility, setVisibility] = React.useState(true);
  const [play, setPlay] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);
  const [currentTrack, setCurrentTrack] = React.useState([]);
  const [titleMode, setTitleMode] = React.useState('releases');

  React.useEffect(() => {
    const trackList = audioData.map((i) => ({
      id: i.id,
      name: i.name,
      src: i.src,
      text: `${i.text}`,
    }))
    setTracks(trackList);
    setCurrentTrack(trackList[0]);
  }, [])

  const showToggler = () => {
    setVisibility(!visibility);
  }

  const playToggler = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }

  const trackSelector = (e) => {
    playToggler();
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
  }

  const switchMode = () => {
    setTitleMode(titleMode === 'releases' ? 'texts' : 'releases')
  }


  return (
    <section className="player">
      <div className={!visibility ? 'player__wrapper player__wrapper_hidden' : 'player__wrapper player__wrapper_visible'}>
        <button className={!play ?
          'player__play-button player__play-button_play' :
          'player__play-button player__play-button_pause'} onClick={currentTrack.length !== 0 ? playToggler : undefined} />
        <PlayerWindow visibility={visibility} currentTrack={currentTrack} playStatus={play} titleMode={titleMode} setTitle={switchMode} />
        <button className={!visibility ?
          'player__hide-switcher player__hide-switcher_open' :
          'player__hide-switcher player__hide-switcher_close' }
          onClick={showToggler} />
        <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} track={currentTrack} />
      </div>
    </section>
  )
}

export default Player;
