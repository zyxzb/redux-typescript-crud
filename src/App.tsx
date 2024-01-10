import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './module/Layout';
import UserList from './module/User/UserList';
import UserForm from './module/User/UserForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path='/add' element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
