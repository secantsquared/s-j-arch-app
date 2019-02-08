import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <div>
      <header className='header'>
        <img src={logo} alt='logo' className='header__logo' />
        <h3 className='heading-3'>
          Integrity,
          <br />
          Excellence,
          <br />
          Progress
        </h3>
      </header>
    </div>
  );
}
