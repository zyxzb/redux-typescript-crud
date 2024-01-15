import axios from 'axios';
import { IUser, IUserForm } from './User.type';

const baseUrl = 'http://localhost:8000/';

const APiConfig = {
  user: `${baseUrl}user`,
};

export const getUserList = async () => {
  return await axios.get<IUser[]>(APiConfig.user);
};

export const createUser = async (data: IUserForm) => {
  return await axios.post<IUser>(APiConfig.user, data);
};

export const deleteUser = async (id: string | number) => {
  const url = `${APiConfig.user}/${id}`;
  return await axios.delete(url);
};

export const updateUser = async (id: string | number, data: IUserForm) => {
  const url = `${APiConfig.user}/${id}`;
  return await axios.put(url, data);
};
