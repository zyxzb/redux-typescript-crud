import { NavLink } from 'react-router-dom';

const Nav = () => {
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
    <nav className='flex gap-5 '>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.to}
          className={({ isActive }) =>
            isActive ? 'underline font-semibold  underline-offset-2' : ''
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
