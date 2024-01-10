import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, IUserForm, IUserState } from './User.type';
import { createUser, getUserList } from './UserService';

const initialState: IUserState = {
  list: [],
  listStatus: ApiStatus.ideal,
  createUserFormStatus: ApiStatus.ideal,
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
      })
      .addCase(createUserAction.rejected, (state) => {
        state.createUserFormStatus = ApiStatus.error;
      });
  },
});

export default userSlice.reducer;
export const { resetCreateListStatus } = userSlice.actions;
