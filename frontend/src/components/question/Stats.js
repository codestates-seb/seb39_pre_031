import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 16px;
  margin-bottom: 4px;
  padding-bottom: 10px;
  font-size: 13px;
  color: hsl(210, 8%, 45%);
  width: 108px;
  font-weight: 400;
`;

const FontWeight = styled.div`
  font-weight: 500;
  margin-right: 3px;
`;

const VotesBlock = styled.div`
  display: flex;
  color: hsl(210, 8%, 5%);
  border: 1px solid transparent;
`;

const AnswersBlock = styled.div`
  display: flex;
  border: 1px solid transparent;
`;

const ViewsBlock = styled.div`
  display: flex;
  color: hsl(27, 87%, 35%);
  font-weight: 400;
  border: 1px solid transparent;
`;

const Stats = ({ votes, answers, views }) => {
  const ViewsCounter = (views) => {
    if (views > 1000) {
      return `${Math.floor(views / 1000)}k`;
    }
    return views;
  };
  return (
    <Container>
      <VotesBlock>
        <FontWeight>{votes}</FontWeight> votes
      </VotesBlock>
      <AnswersBlock>
        <FontWeight>{answers}</FontWeight> answers
      </AnswersBlock>
      <ViewsBlock>
        <FontWeight>{ViewsCounter(views)}</FontWeight> views
      </ViewsBlock>
    </Container>
  );
};

export default Stats;
