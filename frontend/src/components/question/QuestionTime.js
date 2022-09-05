import styled from 'styled-components';

const QuestionTimeContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #d6d9dc;
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  font-size: 12px;

  > div {
    margin-right: 16px;
    margin-bottom: 8px;
    > span {
      color: #494c4f;
      margin: 2px;
    }
  }
`;

const QuestionTime = ({ createdAt, views }) => {
  const createdTime = new Date(createdAt);

  const timeNow = new Date().getTime();

  const diffTime = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));

  return (
    <QuestionTimeContainer>
      <div>
        <span>Asked</span>
        <span>{diffTime} days ago</span>
      </div>
      <div>
        <span>Modifed</span>
        <span>today</span>
      </div>
      <div>
        <span>Viewed</span>
        <span>{views}</span>
      </div>
    </QuestionTimeContainer>
  );
};

export default QuestionTime;
