import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import InitialFocus from './personInformation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../Components/Navbar';
import MyCourses from './MyCourses.js';
import testPic from '../../pictures/gosuslugi.jpg';
import { host } from '../../index';

import '@fontsource/jost';

export default function GreadSchoolElement() {
  return (
    <>
      <Navbar />
      <Flex height={'300px'}>
        <InitialFocus />
        <Box
          margin="20px 0px 0px 350px"
          padding="20px 20px 50px 20px"
          border="1px solid #B4AFAF"
          borderRadius="10px"
        >
          <Box>
            <Text color={'#494949'} fontWeight="700">
              Как Вам в нашей Школе?
            </Text>
          </Box>
          <Box>
            <Text color={'#494949'}>
              Расскажите, насколько вы готовы порекомендовать школу другим
              пользователям
            </Text>
          </Box>
          <Box>
            <Stack
              spacing={4}
              direction="row"
              align="center"
              margin="10px 0px 10px 0px"
            >
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                1
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                2
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                3
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                4
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                5
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                6
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                7
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                8
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                9
              </Button>
              <Button
                background={'#E4E4E4'}
                height="35px"
                w="60px"
                borderRadius="20px"
                size="sm"
                shadow="0px 1px rgba(0,0,0,0.4)"
              >
                10
              </Button>
            </Stack>
            <Box>
              <Textarea placeholder="Введите отзыв" />
              <Box padding={'10px 0px 10px 0px'}>
                <Button>Отправить отзыв</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box
        height={'100px'}
        maxW={'1100px'}
        margin={'50px auto'}
        background={'#E4E4E4'}
        borderRadius="20px"
      >
        <Text
          textAlign={'center'}
          color={'#494949'}
          fontSize="50px"
          padding={'12px 0px 0px 0px'}
        >
          Мои курсы
        </Text>
      </Box>
      <Flex>
        <MyCourses />
      </Flex>
    </>
  );
}
