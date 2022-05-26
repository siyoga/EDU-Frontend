import {
    Button, FormControl,Center,Box,Link
} from '@chakra-ui/react'
import React,{useEffect, useState} from 'react';
import { Formik, Form } from 'formik';
import LoginField from './loginField';
import { validator } from './validator';

const FormCast =()=>{
    const [data,setData]=useState({number:'',password:''})
    const [errors,setErrors]=useState({number:'',password:''});
    const handlChange = ({target}) => {
        setData((prevState)=>({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig={
        number:{
            isRequired:{
                message:"Номер телефона обязателен для заполнения"
            },
            isNumber:{
                message:"Номер введен некорректно, добавьте вначале + или начните с 8" 
            },
            minTel:{
                message:"Номер телефона слишком короткий",
                value:8
            }
        },
        password:{
            isRequired:{
                message:"Пароль обязателен для заполнения"
            },
            isCapitalSymbol:{
                message:"Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit:{
                message:"Пароль должен содержать хотя бы одно число"
            },
            min:{
                message:"Пароль должен состоять минимум из 8 символов",
                value:8
            },
        }
    }
    useEffect(()=>{
        validate()
    }, [data]);
    const validate = () => {
        const errors= validator(data,validatorConfig)
        setErrors(errors);
        return Object.keys(errors).length===0;
    }
    const isVaild= Object.keys(errors).length===0;
    const handleSubmit = (e) => { 
        e.preventDefault();
        validate();
        const isValid= validate();
        if(!isValid) return;
        console.log(data);
    }
    return(
        <Formik
        >
            <Form onSubmit={handleSubmit}>
            <Center>
                <FormControl
                    background='#E4E4E4' 
                    maxW='800px'
                    height="400px"
                    margin='230px 0px 0px 0px'
                    padding='80px 50px 10px 50px'
                    borderRadius='15px'
                >
                    <LoginField 
                        type="tel" 
                        name="number" 
                        value={data.number} 
                        onChange={handlChange}
                        error={errors.number}
                        placeholder="Номер телефона"
                    />
                    <LoginField  
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={handlChange}
                        error={errors.password}
                        placeholder="Пароль"
                    />
                        <Center>
                            <Box>
                                <Link margin='0px 0px 0px 23px' color='#878787'>Забыли пароль?</Link>
                            </Box>
                        </Center>
                        <Center>
                            <Button _hover={{background:"#FCE699"}}
                                margin='0px 0px 0px 23px'
                                w="350px"
                                mt={4}
                                bg='#FCE699'
                                _focus={{border: '1px solid #FCE699'}}
                                boxShadow='-6px 3px 0px 0px black'
                                colorScheme='teal'
                                _active={{
                                boxShadow:'none',
                                top: '3px',
                                right: '3px',
                                outline: 'none',
                                bg: '#FCE699',
                                }}
                                color='black'
                                borderRadius='20px'
                                type='submit'
                                disabled={!isVaild}
                            >
                            Войти
                            </Button>
                        </Center>
                        <Center>
                            <Box padding='15px 0px 10px 0px'>
                                <Link margin='0px 0px 0px 23px' color='#878787'>Регистрация</Link>
                            </Box>
                        </Center>
                </FormControl>
                </Center>
            </Form>
        </Formik>
        )
}
export default FormCast;