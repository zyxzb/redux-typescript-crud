import axios from 'axios';
import APiConfig from '../../service/ApiConfig';
import { IUser, IUserForm } from './User.type';

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
