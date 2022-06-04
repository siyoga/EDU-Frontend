import { Box, Center } from '@chakra-ui/react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import FormField from './Form/FormField';

function Login() {
  return (
    <Center flexDirection="column">
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Navbar />
        <FormField />
      </Box>
      <Footer />
    </Center>
  );
}

export default Login;
