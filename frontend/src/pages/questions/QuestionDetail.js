import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Data } from '../../common/DummyData/Data';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import RightSide from '../../components/Side/RightSide';
import DetailQue from '../../components/question/DetailQue';
import QuestionTime from '../../components/question/QuestionTime';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 70%;
  padding: 24px;
`;

const QuestionHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > h1 {
    width: 90%;
    word-wrap: break-word;
    margin-bottom: 8px;
  }
`;

const HeadButton = styled.div`
  margin-left: 12px;
`;

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
`;

const QuestionDetail = () => {
  const { questionId } = useParams();

  const dummyData = Data[questionId];

  //! API 받아오기
  //   useEffect(()=> {
  //     fetch(`/users/:${questionId}`')
  //     	.then((res) => res.json())
  //         .then((res) => console.log(''));
  //     }, []);

  return (
    <Container>
      <Content>
        <QuestionHead>
          <h1>{dummyData.title}</h1>
          <HeadButton>
            <AskQuestionBtn />
          </HeadButton>
        </QuestionHead>
        <QuestionTime createdAt={dummyData.createdAt} views={dummyData.views} />
        <QuestionContainer>
          <DetailQue body={dummyData.body} />
          <RightSide />
        </QuestionContainer>
      </Content>
    </Container>
  );
};

export default QuestionDetail;
