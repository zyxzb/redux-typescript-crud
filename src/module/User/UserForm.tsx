import { FormEvent, useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createUserAction, resetCreateListStatus } from './UserSlice';
import { ApiStatus, IUserForm } from './User.type';
import { useNavigate } from 'react-router-dom';

import Style from './UserForm.module.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { createUserFormStatus } = useAppSelector((state) => state.user);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      return alert('Fill all fields');
    }

    const data: IUserForm = { name, email };
    dispatch(createUserAction(data));
  };

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setName('');
      setEmail('');
      dispatch(resetCreateListStatus());
      navigate('/');
    }
  }, [createUserFormStatus, dispatch]);

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <Input label='Name' value={name} type='text' onChange={setName} />
        <Input label='Email' value={email} type='email' onChange={setEmail} />
        <button className={Style['btn-wrapper']}>Create</button>
      </form>
    </div>
  );
};

export default UserForm;
