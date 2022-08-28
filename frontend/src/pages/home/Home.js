import { Outlet } from 'react-router-dom';
import LeftSide from '../../components/Side/LeftSide';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftSideBlock = styled.div`
  width: 164px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  padding: 24px;
  width: 1100px;
`;

const Home = () => {
  return (
    <Container>
      <LeftSideBlock>
        <LeftSide />
      </LeftSideBlock>
      <Content>
        <div>여기는 Container입니다.</div>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Home;
