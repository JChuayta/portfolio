import React from 'react';
import './styles.css';

interface INavigationMenuProps {
  children?: React.ReactNode;
}

const NavigationMenu: React.FC<INavigationMenuProps> = () => {
  return (
    <nav className='layout__menu'>
      <ul className="menu__list">
        <li className="menu__option">
          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-house"></i>
            <span className="menu__overlay">Home</span>
          </a>
        </li>
        <li className="menu__option">
          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-user"></i>
            <span className="menu__overlay">Sobre Mi</span>
          </a>
        </li>
        <li className="menu__option">

          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-graduation-cap"></i>
            <span className="menu__overlay">Estudios</span>
          </a>
        </li>
        <li className="menu__option">

          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-briefcase"></i>
            <span className="menu__overlay">Portafolio</span>
          </a>
        </li>
        <li className="menu__option">

          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-book"></i>
            <span className="menu__overlay">Blog</span>
          </a>
        </li>
        <li className="menu__option">

          <a href="/" className='menu__link'>
            <i className="menu__icon fa-solid fa-envelope"></i>

            <span className="menu__overlay">Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
