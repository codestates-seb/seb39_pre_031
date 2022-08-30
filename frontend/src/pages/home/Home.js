import { Outlet } from 'react-router-dom';
import LeftSide from '../../components/Side/LeftSide';
import styled from 'styled-components';
import RightSide from '../../components/Side/RightSide';
import HomeContainer from './HomeContainer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  padding: 24px;
`;

const Home = () => {
  return (
    <Container>
      <LeftSide />
      <Content>
        <Outlet />
        <HomeContainer />
        <RightSide />
      </Content>
    </Container>
  );
};

export default Home;
