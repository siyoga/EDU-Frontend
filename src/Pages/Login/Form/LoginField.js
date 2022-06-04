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
} from '@chakra-ui/react';
import React, { useState } from 'react';

const LoginField = ({ placeholder, type, name, value, onChange, error }) => {
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

export default LoginField;
