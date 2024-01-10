import { NavLink } from 'react-router-dom';

import Style from './GlobalNavStyle.module.css';

const GlobalNav = () => {
  const navLinks = [
    {
      to: '/',
      title: 'Dashboard',
    },
    {
      to: '/add',
      title: 'Add user',
    },
  ];

  return (
    <nav className={Style.container}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.to}
          className={({ isActive }) => (isActive ? Style.active : '')}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default GlobalNav;
