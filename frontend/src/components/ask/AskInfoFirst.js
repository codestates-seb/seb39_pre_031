import AskInfoFirstItem from './AskInfoFirstItem';
import Card from '../../common/Card';
import styled from 'styled-components';

const Title = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  background-color: hsl(210, 8%, 97.5%);
  font-weight: 500;
  color: hsl(210, 8%, 35%);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: none;
`;

const ContentsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Contents = styled.div`
  line-height: 1rem;
  margin: 16px 16px;
  font-size: 12px;
`;

const AskInfoFirst = () => {
  return (
    <Card width="314px" margin="0.1rem" padding="0">
      <Title>Step 1: Draft your question</Title>
      <ContentsContainer>
        <Contents>
          The community is here to help you with specific coding, algorithm, or
          language problems.
        </Contents>
        <Contents>Avoid asking opinion-based questions.</Contents>
        <AskInfoFirstItem />
      </ContentsContainer>
    </Card>
  );
};

export default AskInfoFirst;
