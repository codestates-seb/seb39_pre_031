import styled from 'styled-components';
import AskInfoFirst from './AskInfoFirst';
import AskInfoSecond from './AskInfoSecond';
import AskInfoThird from './AskInfoThird';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

const AskInfo = () => {
  return (
    <Container>
      <AskInfoFirst />
      <AskInfoSecond />
      <AskInfoThird />
    </Container>
  );
};

export default AskInfo;
