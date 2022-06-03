import { useState } from 'react';
<<<<<<< HEAD

import axios from 'axios';
import {
  Button,
  Text,
=======
import axios from 'axios';
import {
  Button,
>>>>>>> 7f04508897cec93ee684f2c3e1ec4a8f55fbfa3f
  Radio,
  RadioGroup,
  Stack,
  Box,
<<<<<<< HEAD
  Input,
} from '@chakra-ui/react';
import { host } from '../../../index';
import { useNavigate } from 'react-router-dom';
=======
  FormControl,
  Center,
  Link,
} from '@chakra-ui/react';
import { host } from '../../../index';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import RegisterField from './RegisterField';
>>>>>>> 7f04508897cec93ee684f2c3e1ec4a8f55fbfa3f

function FormField() {
  const passRgx = new RegExp(
    '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
  );

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');
  const [value, setValue] = useState('1');

  const navigate = useNavigate();

<<<<<<< HEAD
  function handleRegister() {
    if (
      (password === repassword) &
      passRgx.test(password) &
      (username !== '') &
      (email !== '')
    ) {
      axios
        .post(`${host}/auth/register`, {
          username: username,
          password: password,
          email: email,
          type: 'user', // сделать так чтобы, в связи с выбором аккаунта, делался запрос (вместо мужчина женщина)
        })
        .then(() => {
          navigate('/courses');
        })
        .catch(error => {
          console.log(error);
        });

      return;
    }

    if (username === '') {
      setError('Введите логин!');
      return;
    }

    if (email === '') {
      setError('Введите электронну почту!');
      return;
    }

    if (password === '') {
      setError('Введите пароль!');
      return;
    }

    if (repassword === '') {
      setError('Введите пароль повторно!');
      return;
    }

    if (password !== repassword) {
      setError('Пароли должны совпадать!');
      return;
    }

    if (!passRgx.test(password)) {
      setError(
        'Пароль должен содержать в себе 1 заглавную букву,одну цифру, а также состоять из 8 символов!'
      );
      return;
    }
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box
        bg="#E4E4E4"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="60%"
        mt="5vh"
        py={3}
        borderRadius={20}
      >
        <br></br>
        <Input
          id="username"
          required="true"
          height="60px"
          bg="white"
          placeholder="Логин"
          variant="filled"
          size="md"
          width="52%"
          borderRadius={15}
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <br></br>
        <Input
          id="email"
          required="true"
          height="60px"
          margin-top="200px"
          bg="white"
          placeholder="Электронная почта"
          variant="filled"
          size="md"
          width="52%"
          borderRadius={15}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <Input
          id="password"
          required="true"
          type="password"
          height="60px"
          bg="white"
          placeholder="Пароль"
          variant="filled"
          size="md"
          width="52%"
          borderRadius={15}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <Input
          id="repassword"
          required="true"
          type="password"
          height="60px"
          bg="white"
          placeholder="Подтверждение пароля"
          variant="filled"
          size="md"
          width="52%"
          borderRadius={15}
          onChange={e => {
            setRepassword(e.target.value);
          }}
        />
        <br></br>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" id="radio">
            <Radio value="TEACHER">Преподаватель</Radio>
            <Radio value="STUDENT">Ученик</Radio>
          </Stack>
        </RadioGroup>
        <br></br>
        <Button
          width="52%"
          height="59px"
          borderRadius={20}
          variant="primary"
          onClick={handleRegister}
        >
          Зарегистрироваться
        </Button>
        <br></br>
        <Button
          width="23%"
          height="34px"
          bg="#FFFFFF"
          _hover={{
            bg: '#E5E3E3',
          }}
          _active={{
            bg: '#E5E3E3',
          }}
          borderRadius={20}
          variant="primary"
          onClick={() => {
            navigate('/login');
          }}
        >
          Войти
        </Button>
        <br></br>
        <Text color="#FF0000">{error}</Text>
        <br></br>
      </Box>
=======
function handleRegister() {
  if (
    (password === repassword) &
    passRgx.test(password) &
    (username !== '') &
    (email !== '')
  ) {
    axios
      .post(`${host}/auth/register`, {
        username: username,
        password: password,
        email: email,
        type: value,
      })
      .then((response) => {
        navigate('/courses');
      })
      .catch(error => {
        console.log(error);
      });

      return;
  }

  if (username === '') {
    setError('Введите логин!');
    return;
  }

  if (email === '') {
    setError('Введите электронну почту!');
    return;
  }

  if (password === '') {
    setError('Введите пароль!');
    return;
  }

  if (repassword === '') {
    setError('Введите пароль повторно!');
    return;
  }

  if (password !== repassword) {
    setError('Пароли должны совпадать!');
    return;
  }

  if (!passRgx.test(password)) {
    setError(
      'Пароль должен содержать в себе 1 заглавную букву,одну цифру, а также состоять из 8 символов!'
    );
    return;
  }
}
 return (
    <Box mt="10vh">
      <Formik>
        <Form onSubmit={handleRegister}>
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
              <RegisterField
                type="login"
                name="username"
                onChange={e => {
                  setUsername(e.target.value);
                }}
                error={error.login}
                placeholder="Логин"
              />
              <RegisterField
                type="password"
                name="password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
                error={error.password}
                placeholder="Пароль"
              />
              <RegisterField
                type="password"
                name="repassword"
                onChange={e => {
                  setRepassword(e.target.value);
                }}
                error={error.repassword}
                placeholder="Подтверждение пароля"
              />
              <RegisterField
                type="email"
                name="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                error={error.email}
                placeholder="Электронная почта"
              />
              <RadioGroup onChange={setValue} value={value} margin="0 auto">
                <Stack direction="row" id="radio" >
                  <Radio value='TEACHER'>Преподаватель</Radio>
                  <Radio value='STUDENT'>Ученик</Radio>
                </Stack>
              </RadioGroup>
              <Center>
              <Box display="flex" flexDirection="column">
                <Button
                  variant="primary"
                  borderRadius="20px"
                  type="submit"
                  width="8vw"
                  mt="2vh"
                >
                  Зарегистрироваться
                </Button>
                <Center>
                  <Link color="#878787" href="/login" mt="2vh">
                    Вход
                  </Link>
                </Center>
                </Box>
              </Center>
            </FormControl>
          </Center>
        </Form>
      </Formik>
>>>>>>> 7f04508897cec93ee684f2c3e1ec4a8f55fbfa3f
    </Box>
  );
}

export default FormField;
