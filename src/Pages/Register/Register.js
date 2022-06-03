import { Box, Center } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import FormField from './Form/FormField';

function Register() {
  return (
    <Center>
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Navbar />
        <FormField />
      </Box>
    </Center>
  );
}

export default Register;
