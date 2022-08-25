// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Header from './components/layout/Header';
import Navigator from './components/layout/Navigator';
import Home from './pages/home/Home';
import Questions from './pages/questions/Questions';
import Tags from './pages/tags/Tags';
import Users from './pages/users/Users';

const Contents = styled.div``;

function App() {
  // const [helloWorld, setHelloWorld] = useState('');

  // useEffect(() => {
  //   fetch('http://ec2-54-86-32-163.compute-1.amazonaws.com:8080/')
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setHelloWorld(data);
  //     });
  // });

  // src
  // - components/
  //     - commons/ 반복되는 컴포넌트
  //     - layout/ - headr
  //               - navigator
  //               - footer
  // - page
  //     - questions/
  //                 - Form
  //                 - List
  //     - tags/
  //     - users/

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navigator />
        <Contents>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/tags" element={<Tags />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </Contents>
      </div>
    </BrowserRouter>
  );
}

export default App;
