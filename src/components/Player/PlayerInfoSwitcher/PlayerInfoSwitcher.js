import React from 'react';
import classNames from 'classnames';
import defaultTexts from '../../../data/defaultTexts';
import bigButtonImage from '../../../images/player/movie-button-big.svg';
import smallButtonImage from '../../../images/player/movie-button-small.svg';
import './playerInfoSwitcher.css';

const PlayerInfoSwitcher = props => {

  return (
    <div className='player__info-button-wrapper'>
      <button className={classNames ('player__video-button', {
        'player__video-button_hidden': props.currentTrack.video === undefined || !props.visibility,
        'player__video-button_small': document.documentElement.clientWidth <= 480, 
        'player__video-button_big': document.documentElement.clientWidth > 480, 
        })}>
        <a className='player__video-link' href={props.currentTrack.video}>
        </a>
      </button>
      <button 
        className= {classNames ('player__info-button', {'player__info-button_hidden' : !props.visibility})} 
        onClick={props.setTitle}> {props.titleMode === 'releases' ?
        defaultTexts.playerInfoButton.releaseMode :
        defaultTexts.playerInfoButton.textMode}
      </button>
    </div>
  )
}

export default PlayerInfoSwitcher;