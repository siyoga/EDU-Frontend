import axios from 'axios';
import { Box, Button, Center, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../Components/Navbar';
import testPic from '../../pictures/gosuslugi.jpg';
import { host } from '../../index';

import '@fontsource/jost';

function Courses() {
  const searchType = useSelector(state => state.search.type);
  const searchContent = useSelector(state => state.search.content);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log(searchType, searchContent);
    loadCourses();
  }, []);

  function loadCourses() {
    if (searchType === 'Автор') {
      axios
        .get(`${host}/course/get/author/${searchContent}`)
        .then(response => {
          setCourses(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
      return;
    }

    if (searchType === 'Курс' && searchContent !== '') {
      axios
        .get(`${host}/course/get/name/${searchContent}`)
        .then(response => {
          setCourses(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
      return;
    }

    axios
      .get(`${host}/course/get/all`)
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Center>
      <Box justifyContent="center" flexDirection="column" width="90%">
        <Navbar />
        <Center>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            mt="4vh"
          >
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
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      mt="20px"
                    >
                      <Button variant="primary" borderRadius={20}>
                        Записаться
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
        </Center>
      </Box>
    </Center>
  );
}

export default Courses;
