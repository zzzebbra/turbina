import React from 'react';
import '../../blocks/header/header.css';
import '../../blocks/header/__close-button/header__close-button.css';
import logoMarshak from '../../images/logo-marshak.svg';
import Links from '../Links/Links'
import Streamings from '../Streamings/Streamings'

const linkMarshak = 'https://marshakbooks.ru/'

function Header(props) {
  // const [isHidden, setIsHidden] = React.useState(true);
  const [isStreamigsHidden, setIsStreamigsHidden] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);

  function handleVisible() {
    props.handleVisible()
    setIsStreamigsHidden(!isStreamigsHidden)
  }

  React.useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', changeWindowWidth);
    return () => {
    window.removeEventListener('resize', changeWindowWidth);
    }
  })

  if(windowWidth<=645){
    return (
      <div className='header'>
        <a href={linkMarshak} target='_blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
        <ul className="headerLinksList">
        {/* <button type="button" onClick={handleStreamingsVisible} className = 'header__close-button'></button> */}
          <Streamings
          hidden = {isStreamigsHidden}
          onClick={handleVisible}
          title = 'Стриминги'/>
          <Links
          hidden = {isStreamigsHidden}
          link = 'https://music.yandex.ru/home'
          title = 'Яндекс.Музыка ↗'/>
          <Links
          hidden = {isStreamigsHidden}
          link = 'https://www.spotify.com/ru-ru/'
          title = 'Spotify ↗'/>
          <Links
          hidden = {isStreamigsHidden}
          link = 'https://music.apple.com/ru/browse'
          title = 'Apple Music ↗'/>
          <Links
          hidden = {isStreamigsHidden}
          link = 'https://vk.com/vkmusic'
          title = 'VK Music ↗'/>
        </ul>
      </div>
    )
  }
  return (
    <div className='header'>
      <a href={linkMarshak} target='_blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
      <ul className="headerLinksList">
        <Links

        link = 'https://music.yandex.ru/home'
        title = 'Яндекс.Музыка ↗'/>
        <Links

        link = 'https://www.spotify.com/ru-ru/'
        title = 'Spotify ↗'/>
        <Links

        link = 'https://music.apple.com/ru/browse'
        title = 'Apple Music ↗'/>
        <Links

        link = 'https://vk.com/vkmusic'
        title = 'VK Music ↗'/>
      </ul>
    </div>
  )
}

export default Header;
