import { Box, Center } from '@chakra-ui/react';
import Info from './Info/Info';
import Navbar from '../../Components/Navbar';

function Main() {
  return (
    <Center>
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Navbar />
        <Info />
      </Box>
    </Center>
  );
}

export default Main;
