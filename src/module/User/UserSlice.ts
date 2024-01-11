import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, IUserForm, IUserState } from './User.type';
import { createUser, deleteUser, getUserList, updateUser } from './UserService';
import { toastSuccess, toastError } from '../../utils/utils';

const initialState: IUserState = {
  list: [],
  listStatus: ApiStatus.ideal,
  createUserFormStatus: ApiStatus.ideal,
  updateUserFormStatus: ApiStatus.ideal,
};

export const getUserListAction = createAsyncThunk(
  'user/getUserListAction',
  async () => {
    const response = await getUserList();
    return response.data;
  },
);

export const createUserAction = createAsyncThunk(
  'user/createUserAction',
  async (data: IUserForm) => {
    const response = await createUser(data);
    return response.data;
  },
);

export const deleteUserAction = createAsyncThunk(
  'user/deleteUserAction',
  async (id: string | number) => {
    // const response = await deleteUser(id);
    await deleteUser(id);
    return id;
  },
);

interface IUpdateUserAction {
  id: string | number;
  data: IUserForm;
}

export const updateUserAction = createAsyncThunk(
  'user/updateUserAction',
  async ({ id, data }: IUpdateUserAction) => {
    const response = await updateUser(id, data);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetCreateListStatus: (state) => {
      state.createUserFormStatus = ApiStatus.ideal;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserListAction.pending, (state) => {
        state.listStatus = ApiStatus.loading;
      })
      .addCase(getUserListAction.fulfilled, (state, action) => {
        state.list = action.payload;
        state.listStatus = ApiStatus.ideal;
      })
      .addCase(getUserListAction.rejected, (state) => {
        state.listStatus = ApiStatus.error;
      });
    builder
      .addCase(createUserAction.pending, (state) => {
        state.createUserFormStatus = ApiStatus.loading;
      })
      .addCase(createUserAction.fulfilled, (state) => {
        state.createUserFormStatus = ApiStatus.success;
        toastSuccess('User created successfully');
      })
      .addCase(createUserAction.rejected, (state) => {
        state.createUserFormStatus = ApiStatus.error;
        toastError('Error while creating user');
      });
    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      const newList = state.list.filter((user) => user.id !== action.payload);
      state.list = newList;
      toastSuccess('User deleted successfully');
    });
    builder
      .addCase(updateUserAction.pending, (state) => {
        state.updateUserFormStatus = ApiStatus.loading;
      })
      .addCase(updateUserAction.fulfilled, (state) => {
        state.updateUserFormStatus = ApiStatus.success;
        toastSuccess('User updated successfully');
      })
      .addCase(updateUserAction.rejected, (state) => {
        state.updateUserFormStatus = ApiStatus.error;
        toastSuccess('User while updating user');
      });
  },
});

export default userSlice.reducer;
export const { resetCreateListStatus } = userSlice.actions;
