import React from 'react';
import classNames from 'classnames';
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
      videoLink: i.link,
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
      <div className={classNames ('player__wrapper', {
        'player__wrapper_hidden' : !visibility,
        'player__wrapper_visible' : visibility,
      })}>
        <a className={classNames ('player__video-link', {'player__video-link_visible' : !!currentTrack.videoLink})}
        href={currentTrack.videoLink} target='_blank' />
        <button className={classNames ('player__play-button', {
          'player__play-button_play' : !play,
          'player__play-button_pause': play,
        })}
          onClick={currentTrack.length !== 0 ? playToggler : undefined} />
        <PlayerWindow visibility={visibility} currentTrack={currentTrack} playStatus={play} titleMode={titleMode} setTitle={switchMode} />
        <button className= {classNames ('player__hide-switcher', {
          'player__hide-switcher_open' : !visibility,
          'player__hide-switcher_close' : visibility,
        })}
          onClick={showToggler} />
        <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} track={currentTrack} />
      </div>
    </section>
  )
}

export default Player;
