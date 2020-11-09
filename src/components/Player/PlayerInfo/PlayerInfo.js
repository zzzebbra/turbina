import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import defaultTexts from '../../../data/defaultTexts';
import './playerInfo.css';

const PlayerInfo = props => {
  const trackListLength = props.data.length;

  return (
    <article className="player__info">
      <Scrollbars
        renderTrackVertical={() => <div className="track-vertical"/>}
        renderThumbVertical={()=> <div className="thumb-vertical thumb-vertical-active"/>}>
          <ul className="player__list">
            <p className="player__list-title">{
              props.titleMode === 'releases' && trackListLength === 1 ?
              defaultTexts.playerListTitle.singleReleaseMode : (
                props.titleMode === 'releases' ?
              defaultTexts.playerListTitle.releaseMode :
              defaultTexts.playerListTitle.textMode
              )
              }</p>
              {
              props.data.map((item) => (
              <li key={item.id} id={item.id} src={item.src} className={
                props.titleMode === 'releases' ?
                "player__list-item player__list-item_active" :
                "player__list-item"
                } onClick={props.selector}>
              {item.name}
              </li>
            ))}
            {
              <li key={props.track.id} className={
                props.titleMode === 'texts' ?
                "player__list-item player__list-text player__list-item_active" :
                "player__list-item player__list-text"}>
                {props.track.text}
              </li>
            }
          </ul>
      </Scrollbars>
    </article>
  )
}

export default PlayerInfo;
