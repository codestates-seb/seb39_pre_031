import styled from 'styled-components';
import AnswerItem from './AnswerItem';

const Container = styled.div`
  padding-top: 30px;
`;

const Count = styled.div`
  font-size: 19px;
  margin-bottom: 8px;
`;

const AnswerList = ({ listAnswer }) => {
  console.log(listAnswer);
  return (
    <Container>
      <Count> {listAnswer !== undefined && listAnswer.length} Answers</Count>
      {listAnswer &&
        listAnswer.map((data) => {
          return <AnswerItem key={data.answerId} data={data} />;
        })}
    </Container>
  );
};

export default AnswerList;
