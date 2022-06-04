import React, { Fragment } from 'react';
import {
  Button,
  useDisclosure,
  Text,
  Box,
  Image,
  Icon,
} from '@chakra-ui/react';
import profileAvatar from '../../../pictures/user.png';
import { useSelector } from 'react-redux';

function PersonalInfo() {
  const user = useSelector(state => state.user);

  return (
    <Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border={'1px'}
        borderColor="#B4AFAF"
        borderRadius="10px"
        margin={20}
        padding={10}
      >
        <Image
          borderRadius="full"
          maxH={'180px'}
          maxW="180px"
          src={profileAvatar}
        />
        <Text fontSize="14px" color="#494949" mt="2vh" fontWeight={600}>
          {user.username}
        </Text>
        <Text fontSize="14px" color="#494949" mt="0.5vh">
          {user.email}
        </Text>
      </Box>
      <Box
        background="#E4E4E4"
        borderRadius="20px"
        maxWidth="20vw"
        maxHeight="10vh"
        alignItems="center"
        mt="2vh"
      >
        <Text textAlign="center" color="#494949" fontSize="2xl" p={5}>
          Мои курсы
        </Text>
      </Box>
    </Fragment>
  );
}
export default PersonalInfo;
