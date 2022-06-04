import axios from 'axios';
import React from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';

import { Button, FormControl, Center, Box, Link } from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import { host } from '../../../index';
import LoginField from './LoginField';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/slices/userSlice';

function FormField() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ login: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin() {
    if (username !== '' && password !== '') {
      axios
        .post(`${host}/auth/login`, {
          username: username,
          password: password,
        })
        .then(response => {
          const cookies = new Cookies();
          cookies.set('user', response.data.data.tokenPair.token);
          const userId = cookies.get('user');

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

          navigate('/courses');
        })
        .catch(error => {
          console.log(error);
        });

      return;
    }

    if (username === '') {
      setError({ login: '', password: 'Пароль обязателен для заполнения' });
      return;
    }

    if (password === '') {
      setError({ login: 'Логин обязателен для заполнения', password: '' });
      return;
    }
  }

  return (
    <Box mt="10vh">
      <Formik>
        <Form onSubmit={handleLogin}>
          <Center>
            <FormControl
              display="flex"
              background="#E4E4E4"
              maxW="40vw"
              height="400px"
              borderRadius="15px"
              flexDirection="column"
              justifyContent="center"
            >
              <LoginField
                type="login"
                name="username"
                onChange={e => {
                  setUsername(e.target.value);
                }}
                error={error.login}
                placeholder="Логин"
              />
              <LoginField
                type="password"
                name="password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
                error={error.password}
                placeholder="Пароль"
              />
              <Center>
                <Box display="flex" flexDirection="column">
                  <Button
                    variant="primary"
                    borderRadius="20px"
                    type="submit"
                    width="8vw"
                    mt="2vh"
                  >
                    Войти
                  </Button>
                  <Center>
                    <Link color="#878787" href="/register" mt="2vh">
                      Регистрация
                    </Link>
                  </Center>
                </Box>
              </Center>
            </FormControl>
          </Center>
        </Form>
      </Formik>
    </Box>
  );
}
export default FormField;
