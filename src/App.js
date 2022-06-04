import React, { useEffect } from 'react';
import Main from './Pages/Main/Main';
import Courses from './Pages/Courses/Courses';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import Cookies from 'universal-cookie';

import axios from 'axios';
import theme from './styles/theme';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { host } from './index';
import { login } from './store/slices/userSlice';
import UserCourses from './Pages/Profile/Components/UserCourses';
import Profile from './Pages/Profile/Profile';

function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const userId = cookies.get('user');
  useEffect(() => {
    if (userId !== undefined) {
      axios
        .get(`${host}/user/get`, {
          headers: { Authorization: `Bearer ${userId}` },
        })
        .then(response => {
          dispatch(
            login({
              username: response.data.data.user.username,
              email: response.data.data.user.email,
              courses: response.data.data.user.courses,
            })
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/account/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
