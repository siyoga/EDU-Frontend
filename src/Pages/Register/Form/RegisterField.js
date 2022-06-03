import {
    FormControl,
    Input,
    FormErrorMessage,
    InputGroup,
    Box,
    Center,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  
  const RegisterField = ({ placeholder, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword(prevState => !prevState);
    };
    return (
      <FormControl isInvalid={error} margin="10px">
        <InputGroup size="lg" width="50%" margin="0 auto">
          <Input
            borderColor="#FFFFFF"
            background="#FFFFFF"
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            textAlign="center"
          />
        </InputGroup>
        <Center>
          <Box>{error && <FormErrorMessage>{error}</FormErrorMessage>}</Box>
        </Center>
      </FormControl>
    );
  };
  
  export default RegisterField;
  