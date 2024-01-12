import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '.';

import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='w-full max-w-7xl mx-auto px-10'>
        <h1 className='text-3xl my-10 lg:my-20 font-extrabold'>
          React, Redux, Typesctipt, Tailwind, Json Server - CRUD APP
        </h1>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
