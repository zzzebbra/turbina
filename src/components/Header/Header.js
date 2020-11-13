import React from 'react';
import './header.css';
import logoMarshak from '../../images/logo-marshak.svg';
import Links from '../Links/Links'
import Streamings from '../Streamings/Streamings'

function Header() {
  // const [isHidden, setIsHidden] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);
  const [mobileMenu, setMobileMenu] = React.useState(false);
// стейт фиксирует размер экрана

  // function handleVisible() {
  //   setIsHidden(false)
  // }


  React.useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', changeWindowWidth);
    return () => {
    window.removeEventListener('resize', changeWindowWidth);
    }
  })

  const menuToggler = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div className='header'>
      <a href='https://marshakbooks.ru/' target='blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
        {windowWidth <= 480 && !mobileMenu ?
            <Streamings
            windowWidth = {windowWidth}
            link = '#'
            title = 'Стриминги'
            menu = {mobileMenu}
            menuToggler = {menuToggler}

            /> :
          <ul className="headerLinksList">
            <Links
            windowWidth = {windowWidth}
            menu = {mobileMenu}
            link = 'https://music.yandex.ru/home'
            title = 'Яндекс.Музыка ↗'/>
            <Links
            windowWidth = {windowWidth}
            menu = {mobileMenu}
            link = 'https://www.spotify.com/ru-ru/'
            title = 'Spotify ↗'/>
            <Links
            windowWidth = {windowWidth}
            menu = {mobileMenu}
            link = 'https://music.apple.com/ru/browse'
            title = 'Apple Music ↗'/>
            <Links
            windowWidth = {windowWidth}
            menu = {mobileMenu}
            link = 'https://vk.com/vkmusic'
            title = 'VK Music ↗'/>
          </ul>
        }
    </div>
  )
}

export default Header;
