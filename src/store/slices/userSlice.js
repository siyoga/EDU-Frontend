import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    courses: [],
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.courses = action.payload.courses;
    },

    logout: state => {
      state.username = '';
      state.email = '';
      state.courses = [];
    },

    updateCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { login, logout, updateCourses } = userSlice.actions;
export default userSlice.reducer;
