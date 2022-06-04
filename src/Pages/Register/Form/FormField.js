import { useState } from 'react';

import axios from 'axios';
import {
  Button,
  Radio,
  RadioGroup,
  Stack,
  Box,
  FormControl,
  Center,
  Link,
} from '@chakra-ui/react';
import { host } from '../../../index';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import RegisterField from './RegisterField';

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
        .then(response => {
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
                <Stack direction="row" id="radio">
                  <Radio value="TEACHER">Преподаватель</Radio>
                  <Radio value="STUDENT">Ученик</Radio>
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
    </Box>
  );
}

export default FormField;
