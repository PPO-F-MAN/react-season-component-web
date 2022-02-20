import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Home, Season, Time, Weather } from './pages';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: 'proxima-nova, sans-serif, Roboto',
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/season" element={<Season />} />
          <Route path="/time" element={<Time />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
