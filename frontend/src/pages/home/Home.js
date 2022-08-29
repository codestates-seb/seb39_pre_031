import { Outlet } from 'react-router-dom';
import LeftSide from '../../components/Side/LeftSide';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
`;

const LeftSideBlock = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  flex-basis: 164px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 24px;
  flex-basis: auto;
  border-left: 0.1px solid hsl(210, 8%, 75%);
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
