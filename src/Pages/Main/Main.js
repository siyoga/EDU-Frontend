import { Box, Center } from '@chakra-ui/react';
import Info from './Info/Info';
import Navbar from '../../Components/Navbar';
import Faq from '../../Components/Faq';
import Footer from '../../Components/Footer';

function Main() {
  return (
    <Center flexDirection="column">
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Navbar />
        <Info />
        <Faq />
      </Box>
      <Footer />
    </Center>
  );
}

export default Main;
