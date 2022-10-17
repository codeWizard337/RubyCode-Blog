import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { AddPost, Error, FullPost, Home, Login, Register } from './pages';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
