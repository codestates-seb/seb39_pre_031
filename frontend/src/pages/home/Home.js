import { Outlet } from 'react-router-dom';
import LeftSide from '../../components/Side/LeftSide';
import styled from 'styled-components';

const Content = styled.div`
  height: 100%;
  padding-left: 164px;
`;

const Home = () => {
  return (
    <>
      <LeftSide />
      <Content>
        <div>여기는 Container입니다.</div>
        <Outlet />
      </Content>
    </>
  );
};

export default Home;
