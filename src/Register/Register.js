import {useState} from "react";
import axios from "axios";
import {
    Button,
    Text,
    Radio,
    RadioGroup,
    Stack,
    Box,
    Center,
    Input,

} from '@chakra-ui/react';

function Register() {

    const [value, setValue] = useState('1')

    return(
      <>
      <Center>
      <Box
        width="90%"
        bg="#E4E4E4"
        display="flex"
        justifyContent="space-between"
        px={2}
        py={3}
        borderRadius={20}
      >
        <Text>logo</Text>
        <Box display="flex" flex-direction="row">
          <Input
            borderRadius={"15px 15px 15px 15px"}
            size="md"
            bg="white"
            variant="outline"
            outline={2}
            outlineColor="#B4AFAF"
          ></Input>
          <Button
            ml={9}
            borderRadius={20}
            bg="#FCE699"
            boxShadow="solid-left"
            outline="none"
            px={7}
            _hover={{
              bg: '#FCE699',
            }}
            _focus={{
              outline: 'none',
              bg: '#FCE699',
            }}
            _active={{
              boxShadow: '0px 0px 0px 0px',
              top: '3px',
              right: '3px',
              outline: 'none',
              bg: '#FCE699',
            }}
          >
            Регистрация
          </Button>
        </Box>
      </Box>
    </Center>

    <br></br>

    <Center>        
      <Box
        width="70%"
        bg="#E4E4E4"
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        px={2}
        py={3}
        borderRadius={20}
      >
        <br></br>
        <Input
          id='username'
          required="true"
          height="60px"
          bg="white"
          placeholder="Логин"
          variant="filled"
          size="md"
          width="52%"
          borderRadius={"15px 15px 15px 15px"}
        ></Input>
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
          borderRadius={"15px 15px 15px 15px"}
        ></Input>
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
          borderRadius={"15px 15px 15px 15px"}
        ></Input>
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
          borderRadius={"15px 15px 15px 15px"}
        ></Input>
        <br></br>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row' id="radio">
            <Radio value='Male'>Муж</Radio>
            <Radio value='Female'>Жен</Radio>
          </Stack>
        </RadioGroup>  
        <br></br>
        <Button
            width="52%"
            height="59px"
            borderRadius={20}
            bg="#FCE699"
            boxShadow="solid-left"
            outline="none"
            px={1}
            _hover={{
              bg: '#FCE699',
            }}
            _focus={{
              outline: 'none',
              bg: '#FCE699',
            }}
            _active={{
              boxShadow: '0px 0px 0px 0px',
              top: '3px',
              right: '3px',
              outline: 'none',
              bg: '#FCE699',
            }}
            onClick={(e)=>{
              const passRgx = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}")
              let username = document.getElementById("username").value
              let email = document.getElementById("email").value
              let password = document.getElementById("password").value
              let repassword = document.getElementById("repassword").value
              
              if (password === repassword & passRgx.test(password) & username !== "" & email !== "") {                
                axios.post('http://127.0.0.1:8080/auth/register', 
                {
                  username: username,
                  password: password,
                  email: email,
                  type: "user",
                })
                .then((response) => {
                  console.log(response);
                });
              }
              else {                
                let err = document.getElementById('errorMessage')
                if (username === "") {err.textContent = "Введите логин!"}
                else if (email === "") {err.textContent = "Введите электронну почту!"}
                else if (password === "") {err.textContent = "Введите пароль!"}
                else if (repassword === "") {err.textContent = "Введите пароль повторно!"}
                else if (password !== repassword) {err.textContent = "Пароли должны совпадать!"}
                else if (!passRgx.test(password)) {err.textContent = "Пароль должен содержать в себе 1 заглавную букву,одну цифру, а также состоять из 8 символов!"}
                console.log(err)
              }
            }}
          >
            Зарегистрироваться
          </Button>
          <br></br>
          <Button
            width="23%"
            height="34px"
            borderRadius={20}
            bg="#FFFFFF"
            boxShadow="solid-left"
            outline="none"
            px={1}
            _hover={{
              bg: '#FFFFFF',
            }}
            _focus={{
              outline: 'none',
              bg: '#FFFFFF',
            }}
            _active={{
              boxShadow: '0px 0px 0px 0px',
              top: '3px',
              right: '3px',
              outline: 'none',
              bg: '#FFFFFF',
            }}
          >
            Войти
          </Button>
          <br></br>
          <Text id="errorMessage" color="#FF0000"></Text>
          <br></br>
      </Box>
    </Center>

    <Center>
        <Box
          height="220px"
          position="absolute"
          bottom="-313px"
          bg="#333333"
          width="100%"
          display="flex"
        >
        </Box>
    </Center>
    </>
    )
}

export default Register;