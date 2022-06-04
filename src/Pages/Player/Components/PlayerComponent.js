import { AspectRatio, Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { host } from '../../../index';
import '@fontsource/jost';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { updateCourses } from '../../../store/slices/userSlice';

function PlayerComponent() {
  const [courseVideos, setCourseVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [isVideosLoaded, setIsVideoLoaded] = useState(false);

  const cookies = new Cookies();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const userId = cookies.get('user');

  let video = (
    <video
      src={`${host}/video/get/${params.courseId}/${selectedVideo}`}
      controls
    />
  );

  useEffect(() => {
    loadVideos();
  }, []);

  function subscribeOnCourse() {
    axios
      .patch(
        `${host}/user/subscribeOnCourse`,
        {
          courseId: params.courseId,
        },
        { headers: { Authorization: `Bearer ${userId}` } }
      )
      .then(response => {
        dispatch(updateCourses(response.data.data.user.courses));
      });
  }

  function checkCourse(userCourses, courseId) {
    if (userCourses.indexOf(courseId) !== -1) {
      return false;
    }

    return true;
  }

  function loadVideos() {
    axios.get(`${host}/video/all/get/${params.courseId}`).then(response => {
      setCourseVideos(response.data.data.data);
      setIsVideoLoaded(true);
    });
  }

  function changeVideo(lessonNumber) {
    setSelectedVideo(lessonNumber);

    video = (
      <video
        src={`${host}/video/get/${params.courseId}/${selectedVideo}`}
        controls
      />
    );

    console.log(video);
  }

  return (
    <Box p={10} display="flex" justifyContent="space-between">
      <Box>
        {isVideosLoaded && (
          <AspectRatio width="65vw" height="70vh" ratio={1} borderRadius={5}>
            {video}
          </AspectRatio>
        )}
      </Box>

      <Box
        overflowY="auto"
        maxHeight="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        ml="2vw"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          {checkCourse(user.courses, params.courseId) && (
            <Box
              position="absolute"
              height="60%"
              width="20%"
              bg="gray.200"
              opacity={0.9}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              {user.username === '' ? (
                <Button
                  variant="primary"
                  width="-webkit-fit-content"
                  fontSize="2xl"
                  py={4}
                  px={6}
                  onClick={() => {
                    navigate(`/login`);
                  }}
                >
                  Записаться
                </Button>
              ) : (
                <Button
                  variant="primary"
                  width="-webkit-fit-content"
                  fontSize="2xl"
                  py={4}
                  px={6}
                  onClick={() => {
                    subscribeOnCourse();
                  }}
                >
                  Записаться
                </Button>
              )}
            </Box>
          )}
          {courseVideos.map(element => {
            return (
              <Box
                key={element.lessonNumber}
                as="button"
                display="flex"
                flexDirection="column"
                justifyContent="start"
                width="15vw"
                mt="1vh"
                py="1vh"
                px="2vw"
                border="2px"
                borderColor="#FCE699"
                fontFamily="Jost"
                transition="0.1s"
                bg="white"
                _hover={{
                  borderColor: 'gray',
                }}
                _focus={{
                  outline: 'none',
                }}
                onClick={() => {
                  changeVideo(element.lessonNumber);
                }}
                mb="5px"
              >
                <Text fontSize="0.8vw">Урок {element.lessonNumber}</Text>
                <Text fontSize="1vw" fontWeight={600}>
                  {element.name}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default PlayerComponent;
