import { Link } from 'react-router-dom';
import { Nav } from '.';
import ViteSvg from '/vite.svg';

const Header = () => {
  return (
    <header className='bg-violet-500 px-10 h-[70px] text-white flex justify-between items-center w-full'>
      <div className='flex justify-between items-center w-full max-w-7xl mx-auto px-10'>
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
