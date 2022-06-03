import React from 'react';

import { Box, Button, Center, Image, Text } from '@chakra-ui/react';
import { useState, Fragment } from 'react';

import stockImage1 from '../../../pictures/stock1.jpg';
import stockImage2 from '../../../pictures/stock2.jpg';
import stockImage3 from '../../../pictures/stock3.jpg';

import '@fontsource/jost';

function Info() {
  const pictures = [stockImage1, stockImage2, stockImage3];
  const [pictureNum, setPictureNum] = useState(0);

  return (
    <Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mt="5vh"
      >
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="50px" fontFamily="Jost">
            Курсы цифровой грамотности
            <br /> для всех, кому это нужно!
          </Text>
          <Text fontFamily="Jost" fontSize="20px" mt="6vh">
            Разберемся в основах работы с компьютером на примере системы
            Windows.
            <br />
            Научимся устанавливать программы, создавать презентации, и таблицы,
            <br />
            взаимодействовать с документами, папками и браузерами.
          </Text>
        </Box>
        <Box>
          <Center display="flex" justifyContent="center" flexDirection="column">
            <Image
              src={pictures[pictureNum]}
              borderRadius={20}
              width="44vw"
              height="52vh"
            />
            <Box mt="0.8vh">
              <Button
                bg={pictureNum === 0 ? '#FCE699' : '#E4E4E4'}
                variant="toogle-xs"
                mr="1vw"
                _focus={{
                  outline: 'none',
                }}
                onClick={() => {
                  setPictureNum(0);
                }}
              />
              <Button
                bg={pictureNum === 1 ? '#FCE699' : '#E4E4E4'}
                variant="toogle-xs"
                mr="1vw"
                _focus={{
                  outline: 'none',
                }}
                onClick={() => {
                  setPictureNum(1);
                }}
              />
              <Button
                bg={pictureNum === 2 ? '#FCE699' : '#E4E4E4'}
                variant="toogle-xs"
                _focus={{
                  outline: 'none',
                }}
                onClick={() => {
                  setPictureNum(2);
                }}
              />
            </Box>
          </Center>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Button
          variant="primary"
          fontSize="30px"
          py="3vh"
          px="2vw"
          borderRadius={20}
          mt="6vh"
        >
          Вперед, к курсам!
        </Button>
      </Box>
    </Fragment>
  );
}

export default Info;
