import React from 'react';
import Main from './Main/Main';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const theme = extendTheme({
  shadows: {
    'solid-left':
      '0px 2px 0px 0px, -1.5px 1.5px 0px 0px, 0px 0px 0px 0px, 0px 0px 0px 0px, -3px 3px 0px 0px',
    'solid-off': '0px 0px 0px 0px',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
