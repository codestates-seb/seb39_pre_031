import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Stats from './Stats';
import { saveCreatedAt } from '../../utils/saveCreatedAt';

const Container = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleBlock = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: hsl(206, 100%, 40%);
  padding-right: 24px;
  margin-top: -2px;
  margin-bottom: 5px;

  > a {
    color: #3974cc;
  }
`;

const ContentsBlock = styled.div`
  font-size: 13px;
  margin-top: -2px;
  margin-bottom: 8px;
`;

const BottomContainer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
`;

const AuthorBlock = styled.div`
  color: hsl(206, 100%, 40%);
  margin-right: 3px;
  cursor: pointer;
`;

const TimeBlock = styled.div`
  color: hsl(210, 8%, 45%);
`;

const QuestionItem = ({ contents }) => {
  const {
    questionId,
    title,
    body,
    generatedTime,
    vote,
    views,
    numAnswer,
    user,
  } = contents;

  const { username } = user;

  const reg = /[#`*]/gi;
  const regReplace = (str) => {
    return str.replace(reg, ``);
  };

  return (
    <Container>
      <Stats votes={vote} views={views} answers={numAnswer} />
      <PostContainer>
        <TitleBlock>
          <Link to={`/questions/${questionId}`}>{title}</Link>
        </TitleBlock>
        <ContentsBlock>{regReplace(body)}</ContentsBlock>
        <BottomContainer>
          <AuthorBlock>{username}</AuthorBlock>
          <TimeBlock>asked {saveCreatedAt(generatedTime)}</TimeBlock>
        </BottomContainer>
      </PostContainer>
    </Container>
  );
};

export default QuestionItem;
