import Header from './components/layout/Header';
import RoutesTree from './RoutesTree';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderBlock = styled.div`
  width: 100vw;
  height: 50px;
`;

const ContentsBlock = styled.div`
  height: calc(100vh - 50px);
`;

function App() {
  return (
    <Container>
      <HeaderBlock>
        <Header />
      </HeaderBlock>
      <ContentsBlock>
        <RoutesTree />
      </ContentsBlock>
    </Container>
  );
}

export default App;
