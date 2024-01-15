import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { Modal } from '.';

import { ApiStatus, IUser } from '../features/user/User.type';
import {
  getUserListAction,
  deleteUserAction,
} from '../features/user/UserSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const UserList = () => {
  const [userDataToView, setUserDataToView] = useState<IUser | null>(null);
  const { list, listStatus } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, [dispatch]);

  return (
    <>
      {list.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {listStatus === ApiStatus.loading && (
              <tr className='!bg-transparent'>
                <td>Loading...</td>
              </tr>
            )}
            {listStatus === ApiStatus.error && (
              <tr className='!bg-transparent'>
                <td>Error while loading :(</td>
              </tr>
            )}
            {listStatus === ApiStatus.ideal &&
              list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <div className='flex gap-2'>
                      <button
                        className='border bg-violet-500 px-2 py-1 text-white transition hover:bg-violet-400'
                        onClick={() => setUserDataToView(item)}
                      >
                        View
                      </button>
                      <button
                        className='border bg-gray-900 px-2 py-1 text-white transition hover:bg-gray-600'
                        onClick={() => navigate('/edit/' + item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className='border bg-rose-600 px-2 py-1 text-white transition hover:bg-rose-500'
                        onClick={() => dispatch(deleteUserAction(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>Add first user..</p>
      )}
      {userDataToView &&
        createPortal(
          <Modal
            title='User Details'
            onClose={() => {
              setUserDataToView(null);
            }}
          >
            <div className=''>
              <div className=''>
                <p>Name: {userDataToView.name}</p>
                <p>Email: {userDataToView.email}</p>
              </div>
            </div>
          </Modal>,
          document.body,
        )}
    </>
  );
};

export default UserList;
