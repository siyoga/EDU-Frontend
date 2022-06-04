import { Box, Center } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import PlayerComponent from './Components/PlayerComponent';
import InfoComponent from './Components/InfoComponent';
import Footer from '../../Components/Footer';

function Player() {
  return (
    <Center flexDirection="column">
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Navbar />
        <PlayerComponent />
        <InfoComponent />
      </Box>
      <Footer />
    </Center>
  );
}

export default Player;
