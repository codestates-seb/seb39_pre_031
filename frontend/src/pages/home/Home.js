import { Outlet } from 'react-router-dom';
import LeftSide from '../../components/Side/LeftSide';
import styled from 'styled-components';
import RightSide from '../../components/Side/RightSide';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 70%;
  border: 1px solid red;
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <LeftSide />
      <Content>
        <Outlet />
        <RightSide />
      </Content>
    </Container>
  );
};

export default Home;
