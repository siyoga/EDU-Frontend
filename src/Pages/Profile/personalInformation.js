import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Image,
  Icon,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import profileAvatar from './0x32kYmNmLGPdCPLcyMr-3753x3753.jpg';

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState('Николас Кейдж');
  const [password, setPassword] = useState('ncsaturn7@aol.com');
  const initialRef = React.useRef();
  let timesStopName = '';
  let timeStopPassword = '';
  const finalRef = React.useRef();
  const functionSavedInformation = () => {
    setUsername(timesStopName);
    setPassword(timeStopPassword);
  };
  return (
    <>
      <Box
        border={'1px'}
        borderColor="#B4AFAF"
        borderRadius="10px"
        margin="20px 0px 0px 40px"
        minH="200px"
        minW="270px"
        padding="25px 0px 0px 0px"
      >
        <Image
          borderRadius="full"
          maxH={'180px'}
          maxW="180px"
          src={profileAvatar}
          margin="0px 0px 0px 35px"
        />
        <Text
          maxW={'200px'}
          fontSize="14px"
          textAlign={'center'}
          margin="0px 0px 0px 20px"
          color="#494949"
          padding="10px 0px 0px 0px"
        >
          {username}
        </Text>
        <Text
          maxW={'200px'}
          fontSize="14px"
          color="#494949"
          margin="0px 0px 0px 20px"
          textAlign={'center'}
        >
          {password}
        </Text>
        <Button onClick={onOpen} margin="-65px 0px 0px 190px">
          <Icon as={EditIcon} />
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Изменение данных пользователя</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Ваше имя</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Введите имя"
                  onChange={e => {
                    timesStopName = e.target.value;
                  }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Электронная почта</FormLabel>
                <Input
                  placeholder="Введите электронную почту"
                  onChange={e => {
                    timeStopPassword = e.target.value;
                  }}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={functionSavedInformation}
              >
                Сохранить
              </Button>
              <Button onClick={onClose}>Отменить</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
export default InitialFocus;
