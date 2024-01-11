import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ApiStatus, IUser } from './User.type';
import { getUserListAction, deleteUserAction } from './UserSlice';
import Modal from '../../components/Modal/Modal';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [userDataToView, setUserDataToView] = useState<IUser | null>(null);
  const { list, listStatus } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, [dispatch]);

  console.log(list, listStatus);
  return (
    <>
      <table>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {listStatus === ApiStatus.loading && <tbody>Loading...</tbody>}
        {listStatus === ApiStatus.error && (
          <tbody>Error while loading :(</tbody>
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
                    className='border px-2 py-1 bg-black hover:opacity-50 transition text-white'
                    onClick={() => setUserDataToView(item)}
                  >
                    View
                  </button>
                  <button
                    className='border px-2 py-1 bg-white text-black'
                    onClick={() => navigate('/edit/' + item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='border px-2 py-1 bg-red-600 text-white'
                    onClick={() => dispatch(deleteUserAction(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </table>
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
