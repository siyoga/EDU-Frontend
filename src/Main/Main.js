import {
  background,
  Box,
  Button,
  Center,
  color,
  Input,
  Text,
} from '@chakra-ui/react';

function Main() {
  return (
    <Center>
      <Box
        width="90%"
        bg="#E4E4E4"
        display="flex"
        justifyContent="space-between"
        px={2}
        py={3}
        borderRadius={20}
      >
        <Text>logo</Text>
        <Box display="flex" flex-direction="row">
          <Input
            size="md"
            bg="white"
            variant="outline"
            outline={2}
            outlineColor="#B4AFAF"
          ></Input>
          <Button
            ml={9}
            borderRadius={20}
            bg="#FCE699"
            boxShadow="solid-left"
            outline="none"
            px={7}
            _hover={{
              bg: '#FCE699',
            }}
            _focus={{
              outline: 'none',
              bg: '#FCE699',
            }}
            _active={{
              boxShadow: '0px 0px 0px 0px',
              top: '3px',
              right: '3px',
              outline: 'none',
              bg: '#FCE699',
            }}
          >
            Регистрация
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default Main;
