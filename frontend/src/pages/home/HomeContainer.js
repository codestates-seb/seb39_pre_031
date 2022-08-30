import styled from 'styled-components';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import QuestionList from '../../components/question/QuestionList';
import QuestionTab from '../../components/question/QuestionTab';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 80%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.div`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const MidContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
`;

const HomeContainer = () => {
  return (
    <Page>
      <TopContainer>
        <Headline>Top Questions</Headline>
        <AskQuestionBtn />
      </TopContainer>
      <MidContainer>
        <QuestionTab />
      </MidContainer>
      <QuestionList />
    </Page>
  );
};

export default HomeContainer;
