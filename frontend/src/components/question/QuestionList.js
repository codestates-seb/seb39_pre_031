import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import { Data } from '../../mocks/Data';

const Container = styled.div`
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-left: -24px;
`;

const QuestionList = () => {
  return (
    <Container>
      {Data.map((item, idx) => (
        <QuestionItem key={idx} contents={item} />
      ))}
    </Container>
  );
};

export default QuestionList;
