export interface IUser {
  id: number;
  name: string;
  email: string;
}

export enum ApiStatus {
  'loading',
  'ideal',
  'success',
  'error',
}

export interface IUserState {
  list: IUser[];
  listStatus: ApiStatus;
  createUserFormStatus: ApiStatus;
}

export const defaultList: IUser[] = [
  {
    id: 1,
    name: 'Bob',
    email: 'bob@example.com',
  },
  {
    id: 2,
    name: 'Sam',
    email: 'sam@example.com',
  },
];

export interface IUserForm {
  name: string;
  email: string;
}
