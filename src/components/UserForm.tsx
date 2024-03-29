import { FormEvent, useEffect, useState } from 'react';
import Input from './Input';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import {
  createUserAction,
  resetCreateListStatus,
  updateUserAction,
} from '../features/user/UserSlice';

import { ApiStatus, IUserForm } from '../features/user/User.type';
import { useNavigate, useParams } from 'react-router-dom';
import { toastInfo } from '../utils/utils';

interface IProps {
  isEditForm?: boolean;
}

const UserForm = ({ isEditForm = false }: IProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { createUserFormStatus, list, updateUserFormStatus } = useAppSelector(
    (state) => state.user,
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      return toastInfo('Please fill all fields');
    }
    const data: IUserForm = { name, email };

    if (isEditForm && id) {
      dispatch(updateUserAction({ id, data }));
      navigate('/');
    } else {
      dispatch(createUserAction(data));
    }
  };

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setName('');
      setEmail('');
      dispatch(resetCreateListStatus());
      navigate('/');
    }
  }, [createUserFormStatus, dispatch, navigate]);

  useEffect(() => {
    if (isEditForm && id) {
      const userData = list.filter((user) => user.id === id);
      if (userData.length) {
        setName(userData[0].name);
        setEmail(userData[0].email);
      }
    }
  }, [isEditForm, id, list]);

  return (
    <div className='flex justify-center '>
      <form className='flex w-[400px] flex-col gap-4' onSubmit={handleSubmit}>
        <Input label='Name' value={name} type='text' onChange={setName} />
        <Input label='Email' value={email} type='email' onChange={setEmail} />
        <button
          className='ml-auto flex bg-violet-500 px-4 py-2 text-white transition hover:bg-violet-400'
          disabled={
            updateUserFormStatus === ApiStatus.loading ||
            createUserFormStatus === ApiStatus.loading
          }
        >
          {isEditForm ? 'Edit' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
