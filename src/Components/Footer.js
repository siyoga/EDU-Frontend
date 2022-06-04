import { Box, Button, Container, Image, Stack, Text } from '@chakra-ui/react';
import logo from '../pictures/logo.png';

function Footer() {
  return (
    <Box
      display="flex"
      spacing="8"
      bg="#333333"
      flexDirection="row"
      justifyContent="left"
      py={12}
      width="100%"
      mt="20vh"
    >
      <Stack
        spacing={{ base: '6', md: '8' }}
        ml="8vw"
        align="start"
        flexDirection="row"
      >
        <Image src={logo} boxSize="100px" mr="2vw" />
        <Box
          display="flex"
          flexDirection="row"
          fontSize="4xl"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#F58220">Old</Text>
          <Text color="#00B4EE">{'&'}</Text>
          <Text color="white">Study</Text>
        </Box>
      </Stack>
      <Stack
        spacing={{ base: '12', md: '8' }}
        justifyContent="center"
        ml="10vw"
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="md" fontWeight="semibold" color="white">
              Ссылки
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">ВК</Button>
              <Button variant="link">Телеграм</Button>
              <Button variant="link">Почта</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="white">
              Курсы
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Как это работает?</Button>
              <Button variant="link">FAQ</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="white">
              Помощь
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Вопрос тех. поддержке</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
