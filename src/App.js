import React from 'react';
import Main from './Pages/Main/Main';
import Courses from './Pages/Courses/Courses';

import theme from './styles/theme';
import store from './store/store';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
