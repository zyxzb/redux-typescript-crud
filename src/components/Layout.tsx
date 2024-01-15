import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '.';

import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mx-auto w-full max-w-7xl px-10'>
        <h1 className='my-10 text-3xl font-extrabold lg:my-20'>
          React, Redux, Typesctipt, Tailwind, Json Server - CRUD APP
        </h1>
        <Outlet />
      </main>
      <ToastContainer position='bottom-right' />
    </>
  );
};

export default Layout;
