import React from 'react';
import defaultTexts from '../../../data/defaultTexts';
import './playerInfo.css';

const PlayerInfo = props => {
  const trackListLength = props.data.length;

  return (
    <article className="player__info-wrapper">
        <div className="player__info">
          <ul className="player__list">
            <p className="player__list-title">{
              props.titleMode == 'releases' && trackListLength === 1 ? 
              defaultTexts.playerListTitle.singleReleaseMode : (
                props.titleMode == 'releases' ?
              defaultTexts.playerListTitle.releaseMode : 
              defaultTexts.playerListTitle.textMode
              )
              }</p>
              {     
              props.data.map((item) => (
              <li key={item.id} id={item.id} src={item.src} className={
                props.titleMode == 'releases' ?
                "player__list-item player__list-item_active" : 
                "player__list-item"
                } onClick={props.selector}>
              {/* {trackListLength === 1 ? '' : item.name} */}
              {item.name}
              <audio>
                <source src={item.src} type="audio/mp3" />
              </audio>
              </li>
            ))}
            {
              <li key={props.track.id} className={
                props.titleMode == 'texts' ?
                "player__list-item player__list-text player__list-item_active" : 
                "player__list-item player__list-text"}>
                {props.track.text}
              </li>
            }
          </ul>
        </div>
      <div className="player__list-scroll">
        <div className="player__list-slider">
          <div className="player__list-slider-button" />
        </div>
      </div>
    </article>  
  )
}

export default PlayerInfo;
