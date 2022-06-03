import axios from 'axios';
import moment from 'moment';

import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { host } from '../../../index';

function InfoComponent() {
  const [course, setCourse] = useState({ loaded: false });
  const params = useParams();

  useEffect(() => {
    getCourse();
  }, []);

  function getCourse() {
    axios
      .get(`${host}/course/get/id/${params.courseId}`)
      .then(response => {
        setCourse(JSON.parse(JSON.stringify(response.data.data)));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Box
      p={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="65vw"
    >
      <Box>
        <Text fontSize="4xl" fontWeight={600} mb="2vh">
          {course.name}
        </Text>
        <Text fontSize="medium" maxWidth="40vw">
          {course.description}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          fontSize="md"
          textAlign="center"
        >
          <Text fontWeight={600}>Дата создания:</Text>
          <Text>
            {moment(course.createdAt).locale('ru').format('D MMMM YYYY')}
          </Text>
        </Box>
        <Box
          py={10}
          display="flex"
          flexDirection="column"
          fontSize="md"
          textAlign="center"
        >
          <Text fontWeight={600}>Автор:</Text>
          <Text>{course.author}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoComponent;
