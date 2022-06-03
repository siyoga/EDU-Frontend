import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    content: '',
    type: 'Курс',
  },
  reducers: {
    switchToCourse: state => {
      state.type = 'Курс';
    },

    switchToAuthor: state => {
      state.type = 'Автор';
    },

    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { switchToCourse, switchToAuthor, setContent } =
  searchSlice.actions;
export default searchSlice.reducer;
