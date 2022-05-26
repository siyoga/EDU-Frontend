import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    FormErrorMessage,
    InputRightElement,
    Button,
    InputGroup,
    Box,
    Center,
    useDisclosure,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import React,{useState} from "react";

const LoginField=({placeholder,type,name,value,onChange,error})=>{
    const [showPassword,setShowPassword]=useState(false);
    const toggleShowPassword = ()=>{
        setShowPassword((prevState)=>!prevState)
    }
    return (
        <FormControl 
        isInvalid={error}
        margin='10px'
        >
            <InputGroup size='lg' width='50%' margin='0 auto'>
                <Input 
                    borderColor='#FFFFFF'
                    background='#FFFFFF'
                    id={name} 
                    name={name}
                    type= {type} 
                    value={value} 
                    onChange={onChange}
                    placeholder={placeholder}
                    textAlign="center"
                />
                {/* {type==="password"&&(
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={toggleShowPassword}>
                    {showPassword ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
                    </Button>
                </InputRightElement>
            )} */}
            </InputGroup>
            <Center>
                <Box >
                    {error&&(
                    <FormErrorMessage  >{error}</FormErrorMessage>
                    )}
                </Box>
            </Center>
        </FormControl>
    );
}

export default LoginField;