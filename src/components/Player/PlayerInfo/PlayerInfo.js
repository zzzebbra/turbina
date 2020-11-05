import React from 'react';
import './playerInfo.css';

const PlayerInfo = props => {
  // const playerList = document.querySelector('.player__info');
  // console.log(playerList);

  // const listScroll = (e) => {
  //   const playerListContainer = document.querySelector('.player__info');
  //   const playerList = document.querySelector('.player__list');
  //   console.log(playerList);
  //   if (playerList.scrollTop === 0 || (playerList.scrollTop + playerListContainer.clientHeight) === playerList.scrollHeight) return;
  //   playerList.scrollTop +=10;
  // }

  // const scrolling = (e) => {
  //   if (e.target.scrollHeight !== e.target.clientHeight) {
  //     e.target.addEventListener('scroll', listScroll);
  //   }
  // }
  // const [scrollHeight, setScrollHeight] = React.useState(0);

  const scroller = (e) => {
    console.log(e.target);
    if ((e.target.scrollTop + e.target.clientHeight) !==  e.target.scrollHeight) {
      e.target.scrollTop +=10;
    }
  }


  return (
    <article className="player__info">
      <ul className="player__list" onScroll={scroller}>
        <p className="player__list-title">Релизы</p>
        {props.data.map((item) => (
          <li key={item.id} id={item.id} src={item.src} className="player__list-item" onClick={props.selector}>
          {item.name}
          <audio>
            <source src={item.src} type="audio/mp3" />
          </audio>
          </li>
        ))}
      </ul>
      <div className="player__list-scroll">
        <div className="player__list-slider" />
      </div>
    </article>  
  )
}

export default PlayerInfo;
