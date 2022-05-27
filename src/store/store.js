import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/slices/searchSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
