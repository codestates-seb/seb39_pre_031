// import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import RoutesTree from './RoutesTree';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <RoutesTree />
      </Container>
    </div>
  );
}

export default App;
