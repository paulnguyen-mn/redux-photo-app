import userApi from "api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk('user/getMe', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const currentUser = await userApi.getMe();
  return currentUser;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }
});

const { reducer: userReducer } = userSlice;
export default userReducer;