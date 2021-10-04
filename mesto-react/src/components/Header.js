import React from 'react';

import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Проект 'Место'" />
    </header>
  );
}

export default Header;