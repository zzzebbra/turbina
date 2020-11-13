import React from 'react';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import defaultTexts from '../../../data/defaultTexts';
import './playerInfo.css';

const PlayerInfo = props => {
  const trackListLength = props.data.length;

  return (
    <article className='player__info'>
      <Scrollbars
        renderTrackVertical={() => <div className={classNames ('track-vertical', {'track-vertical_hidden': trackListLength < 3})}/>}
        renderThumbVertical={()=> <div className='thumb-vertical'/>}>
          <ul className="player__list">
            <p className="player__list-title player__list-title_static">{
              props.titleMode === 'releases' && trackListLength === 1 ?
              defaultTexts.playerListTitle.singleReleaseMode : (
                props.titleMode === 'releases' ?
                defaultTexts.playerListTitle.releaseMode : defaultTexts.playerListTitle.textMode
              )
              }</p>
              {
              props.data.map((item) => (
              <li key={item.id} id={item.id} src={item.src} className={classNames ('player__list-item', {
                'player__list-item_active' : props.titleMode === 'releases',
                'player__list-item_selected' : props.currentTrack.id === item.id,
                })}
                onClick={props.selector}>
                {item.trackName + ' - ' + item.artist}{item.secondArtist ?
                <span className='player__list-item player__feat'> feat </span> : ''}{item.secondArtist ? item.secondArtist  : ''}
              </li>
              ))}
              {
              <li key={props.currentTrack.id} className={classNames ('player__list-item', 'player__list-text', {'player__list-item_active' : props.titleMode === 'texts'})}>
                {props.currentTrack.text}
              </li>
            }
          </ul>
      </Scrollbars>
    </article>
  )
}

export default PlayerInfo;
