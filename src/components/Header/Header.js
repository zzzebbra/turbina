import React from 'react';
import './header.css';
import logoMarshak from '../../images/logo-marshak.svg';
import Links from '../Links/Links'
import Streamings from '../Streamings/Streamings'

function Header() {
  const [isHidden, setIsHidden] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);
// стейт фиксирует размер экрана

  function handleVisible() {
    setIsHidden(false)
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

  return (
    <div className='header'>
      <a href='https://marshakbooks.ru/' target='_blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
      <ul className="headerLinksList">
        <Streamings
        width = {windowWidth}
        hidden = {isHidden}
        link = '#'
        title = 'Стриминги'/>
        <Links
        hidden = {isHidden}
        link = 'https://music.yandex.ru/home'
        title = 'Яндекс.Музыка ↗'/>
        <Links
        hidden = {isHidden}
        link = 'https://www.spotify.com/ru-ru/'
        title = 'Spotify ↗'/>
        <Links
        hidden = {isHidden}
        link = 'https://music.apple.com/ru/browse'
        title = 'Apple Music ↗'/>
        <Links
        hidden = {isHidden}
        link = 'https://vk.com/vkmusic'
        title = 'VK Music ↗'/>
      </ul>
    </div>
  )
}

export default Header;
