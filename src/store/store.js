import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/slices/searchSlice';
import userReducer from '../store/slices/userSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
  },
});
