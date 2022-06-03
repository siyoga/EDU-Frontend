import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Text,
} from '@chakra-ui/react';

import '@fontsource/jost';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setContent,
  switchToAuthor,
  switchToCourse,
} from '../store/slices/searchSlice';

function Navbar() {
  const searchType = useSelector(state => state.search.type);
  const searchContent = useSelector(state => state.search.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChangeSearchType() {
    if (searchType === 'Курс') {
      dispatch(switchToAuthor());
      return;
    }

    dispatch(switchToCourse());
  }

  return (
    <Box
      w="100%"
      bg="#E4E4E4"
      display="flex"
      justifyContent="space-between"
      px="1vw"
      py="0.8vw"
      borderRadius={20}
      mt="1vw"
    >
      <Text>logo</Text>
      <Box display="flex" flex-direction="row">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="4vw"
          whiteSpace="nowrap"
          fontSize="lg"
          textDecoration="none"
        >
          <Link
            fontFamily="Jost"
            mr="2.3vw"
            href="/courses"
            _focus={{
              outline: 'none',
            }}
            _hover={{
              textDecoration: 'none',
              color: 'gray',
            }}
          >
            Курсы
          </Link>
          <Link
            fontFamily="Jost"
            mr="2.3vw"
            _hover={{
              textDecoration: 'none',
              color: 'gray',
            }}
          >
            О нас
          </Link>
          <Link
            fontFamily="Jost"
            _hover={{
              textDecoration: 'none',
              color: 'gray',
            }}
          >
            Помощь
          </Link>
        </Box>

        <InputGroup
          mr="2vw"
          border="2px"
          borderColor="#B4AFAF"
          borderRadius={10}
          _focus={{
            outline: 'none',
          }}
        >
          <InputLeftAddon border="none" bg="white">
            <Button
              variant="search"
              bg="#E4E4E4"
              _focus={{
                outline: 'none',
              }}
              onClick={handleChangeSearchType}
            >
              {searchType}
            </Button>
          </InputLeftAddon>
          <Input
            type="text"
            bg="white"
            placeholder="Поиск"
            border="none"
            outline="none"
            _focus={{
              outline: 'none',
            }}
            onChange={e => {
              dispatch(setContent(e.target.value));
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (window.location.pathname !== '/courses') {
                  navigate(`/courses`);
                  return;
                }
              }
            }}
          />
        </InputGroup>

        <Button
          variant="primary"
          px="2.8vw"
          fontSize="lg"
          borderRadius={20}
          onClick={() => {
            navigate(`/register`);
          }}
        >
          Регистрация
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
