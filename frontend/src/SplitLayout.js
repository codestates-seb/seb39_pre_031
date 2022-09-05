import { Outlet } from 'react-router-dom';
import LeftSide from './components/Side/LeftSide';
import styled from 'styled-components';
import Footer from './components/layout/Footer';

const Page = styled.div`
  position: absolute;
  width: 100%;
`;

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

const SplitLayout = () => {
  return (
    <Page>
      <Container>
        <LeftSide />
        <Content>
          <Outlet />
        </Content>
      </Container>
      <Footer />
    </Page>
  );
};

export default SplitLayout;
