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
              <li key={item.id} id={item.id} src={item.src} className={classNames ('player__list-item', {'player__list-item_active' : props.titleMode === 'releases'})}
                onClick={props.selector}>
                {item.artist + ' - '+ item.trackName}
              </li>
              ))}
              {
              <li key={props.track.id} className={classNames ('player__list-item', 'player__list-text', {'player__list-item_active' : props.titleMode === 'texts'})}>
                {props.track.text}
              </li>
            }
          </ul>
      </Scrollbars>
    </article>
  )
}

export default PlayerInfo;
