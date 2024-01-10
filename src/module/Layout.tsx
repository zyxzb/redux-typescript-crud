import { Outlet } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import Style from './LayoutStyle.module.css';

const Layout = () => {
  return (
    <div>
      <div className={Style.header}>
        <header>
          <h1>Welcome!</h1>
        </header>
      </div>
      <div className={Style['content-section']}>
        <GlobalNav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
