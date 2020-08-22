import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';
import userReducer from "./userSlice";

const rootReducer = {
  photos: photoReducer,
  user: userReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;