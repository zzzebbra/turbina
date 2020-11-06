import React from 'react';
import './header.css';
import logoMarshak from '../../images/logo-marshak.svg';
import Links from '../Links/Links'

function Header() {
  return (
    <div className='header'>
      <a href='https://marshakbooks.ru/' target='blanc'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
        <Links/>
    </div>
  )
}

export default Header;
