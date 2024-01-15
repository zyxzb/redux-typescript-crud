import { Link } from 'react-router-dom';
import { Nav } from '.';
import ViteSvg from '/vite.svg';

const Header = () => {
  return (
    <header className='flex h-[70px] w-full items-center justify-between bg-violet-500 px-10 text-white'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-10'>
        <Link to='/' className='flex gap-3'>
          <img src={ViteSvg} alt='logo' />
          <span className='font-bold'>Home</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
