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
        <Outlet />
      </Content>
    </>
  );
};

export default Home;
