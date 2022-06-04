import { Box, Center } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import PersonalInfo from './Components/PersonalInfo';

import Navbar from '../../Components/Navbar';
import UserCourses from '../Profile/Components/UserCourses';

import '@fontsource/jost';

export default function Profile() {
  return (
    <Center>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="90%"
      >
        <Navbar />
        <PersonalInfo />
        <UserCourses />
      </Box>
    </Center>
  );
}
