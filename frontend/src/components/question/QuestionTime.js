import styled from 'styled-components';
import { saveCreatedAt } from '../../utils/saveCreatedAt';

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

const QuestionTime = ({ generatedTime, modifiedTime, views }) => {
  const generated = saveCreatedAt(generatedTime);
  const modified = saveCreatedAt(modifiedTime);

  return (
    <QuestionTimeContainer>
      <div>
        <span>Asked</span>
        <span>{generated}</span>
      </div>
      <div>
        <span>Modifed</span>
        <span>{modified}</span>
      </div>
      <div>
        <span>Viewed</span>
        <span>{views}</span>
      </div>
    </QuestionTimeContainer>
  );
};

export default QuestionTime;
