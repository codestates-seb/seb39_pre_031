import styled from 'styled-components';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import QuestionList from '../../components/question/QuestionList';
import HomeTab from '../../components/home/HomeTab';
import RightSide from '../../components/Side/RightSide';

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 164px);
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

const Home = () => {
  return (
    <Page>
      <Main>
        <TopContainer>
          <Headline>Top Questions</Headline>
          <AskQuestionBtn />
        </TopContainer>
        <MidContainer>
          <HomeTab />
        </MidContainer>
        <QuestionList />
      </Main>
      <RightSide />
    </Page>
  );
};

export default Home;
