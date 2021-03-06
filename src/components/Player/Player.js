import React from 'react';
import classNames from 'classnames';
import PlayerWindow from './PlayerWindow/PlayerWindow';
import PlayerInfoSwitcher from './PlayerInfoSwitcher/PlayerInfoSwitcher';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import audioData from '../../data/audioData';
import emptyCover from '../../images/player/rectangle.jpg'
import './player.css';

const Player = (props) => {
  const [firstRun, setFirstRun] = React.useState(0)
  const [visibility, setVisibility] = React.useState(true);
  const [play, setPlay] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);
  const [currentTrack, setCurrentTrack] = React.useState([]);
  const [titleMode, setTitleMode] = React.useState('releases');
  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);

  React.useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }

    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    }
  })

  React.useEffect(() => {
    // for checking workability with 2 tracks comment the script below
    const trackList = audioData.map((i) => ({
    // for checking workability with 2 tracks uncomment the script below
    // const trackList = audioData.slice(0, 2).map((i) => ({
    // for checking workability with 1 track uncomment the script below
    // const trackList = audioData.slice(0, 1).map((i) => ({
      id: i.id,
      artist: i.artist,
      secondArtist: i.secondArtist,
      trackName: i.trackName,
      src: i.src,
      cover: i.cover,
      video: i.video,
      text: i.text,
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
    setPlay(false);
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
  }

  const trackChange = (e) => {
    setPlay(false);
    const selectedTrack = tracks.indexOf(currentTrack);
    const nextTrack = tracks[selectedTrack + 1]
    if (!!nextTrack) {
      setFirstRun(1);
      setCurrentTrack(nextTrack);
    }
  }

  React.useEffect (() => {
    if (firstRun === 0) return;
    const playTrack = () => {
      setPlay(true);
    }
    setFirstRun(1);
    playTrack()
  }, [currentTrack, firstRun])

  const switchMode = () => {
    setTitleMode(titleMode === 'releases' ? 'texts' : 'releases')
  }


  return (
    <section className={classNames("player", {
      "player_stretched": !props.isHidden,
      "player__mobile-blur": windowWidth <= 480 && !!visibility,
      "player__mobile-blur_stretched": windowWidth <= 480 && !!visibility && !props.isHidden,
      })}>
      <div className={classNames ('player__wrapper', {
        'player__wrapper_hidden' : !visibility,
        'player__wrapper_visible' : visibility,
      })}>
        <img  className={classNames ('player__cover', {'player__cover_hidden': !visibility})}
        src={currentTrack.cover !== undefined ? currentTrack.cover : emptyCover} alt='album-cover'/>
        <button className={classNames ('player__play-button', {
          'player__play-button_play' : !play,
          'player__play-button_pause': play,
        })}
          onClick={currentTrack.length !== 0 ? playToggler : undefined} />
        <PlayerWindow visibility={visibility}
          currentTrack={currentTrack}
          playStatus={play}
          titleMode={titleMode}
          setTitle={switchMode}
          windowWidth={windowWidth}
          selector={trackChange} />
        <button className= {classNames ('player__hide-switcher', {
          'player__hide-switcher_open' : !visibility,
          'player__hide-switcher_close' : visibility,
        })}
          onClick={showToggler} />
        {windowWidth <= 480 &&
          <PlayerInfoSwitcher currentTrack={currentTrack} visibility={visibility} titleMode={titleMode} setTitle={switchMode} />
        }
        <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} currentTrack={currentTrack} />
      </div>
    </section>
  )
}

export default Player;
