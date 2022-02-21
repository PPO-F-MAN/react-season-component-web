import React from 'react';
import styled from '@emotion/styled';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Season, Time, Weather } from './pages';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/season" element={<Season />} />
          <Route path="/time" element={<Time />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
