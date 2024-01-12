import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components';

import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path='/add' element={<UserForm />} />
          <Route path='/edit/:id' element={<UserForm isEditForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
