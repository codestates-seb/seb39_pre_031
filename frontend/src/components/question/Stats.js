import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 8px;
`;

const AnswersBlock = styled.div`
  display: flex;
  border: 1px solid transparent;
  margin-bottom: 8px;

  ${(props) =>
    props.answers >= 1 &&
    css`
      color: hsl(140, 40%, 40%);
      border: 1px solid hsl(140, 40%, 40%);
      padding: 2px 4px;
      border-radius: 3px;
    `}
`;

const ViewsBlock = styled.div`
  display: flex;
  font-weight: 400;
  border: 1px solid transparent;
  color: ${(props) => props.views > 1000 && 'hsl(27, 87%, 35%)'};
  color: ${(props) => props.views > 10000 && 'hsl(27, 90%, 45%)'};
  color: ${(props) => props.views > 100000 && 'hsl(27, 90%, 55%)'};
`;

const Stats = ({ votes, answers, views }) => {
  const ViewsCounter = (views) => {
    if (views > 1000000) {
      return `${Math.floor(views / 1000000)}m`;
    }
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
      <AnswersBlock answers={answers}>
        <FontWeight>{answers}</FontWeight> answers
      </AnswersBlock>
      <ViewsBlock views={views}>
        <FontWeight>{ViewsCounter(views)}</FontWeight> views
      </ViewsBlock>
    </Container>
  );
};

export default Stats;
