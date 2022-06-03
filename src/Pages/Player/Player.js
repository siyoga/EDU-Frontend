import { Box, Center } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import PlayerComponent from './Components/PlayerComponent';
import InfoComponent from './Components/InfoComponent';

function Player() {
  return (
    <Center>
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
    </Center>
  );
}

export default Player;
