import axios from 'axios';
import testPic from '../../../pictures/gosuslugi.jpg';

import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { host } from '../../../index';

import '@fontsource/jost';

export default function UserCourses() {
  const [courses, setCourses] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    loadCourses();
  }, []);

  function loadCourses() {
    const userCourses = [];

    user.courses.forEach(element => {
      axios
        .get(`${host}/course/get/id/${element}`)
        .then(response => {
          userCourses.push(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    });

    setCourses(userCourses);
  }

  return (
    <Box mt="6vh">
      {courses.map(element => {
        return (
          <Box
            display="flex"
            justifyContent="space-between"
            key={element.id}
            bg="#E4E4E4"
            p="10px"
            borderRadius={20}
          >
            <Image src={testPic} width="350px" borderRadius={20} />
            <Box
              display="flex"
              flexDirection="column"
              textAlign="left"
              width="40vw"
              p="10px"
              pl="40px"
              fontFamily="Jost"
            >
              <Text fontSize="4xl" fontWeight="bold">
                {element.name}
              </Text>
              <Text fontSize="15px" mt="20px">
                {element.description}
              </Text>
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Button variant="primary" borderRadius={20}>
                  Продолжить курс
                </Button>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignContent="center"
                  width="70%"
                  mt="10px"
                >
                  <Text display="8px">
                    Кол-во студентов: <b>{element.studentCount}</b>
                  </Text>
                  <Text display="8px">
                    Автор курса: <b>{element.author}</b>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
