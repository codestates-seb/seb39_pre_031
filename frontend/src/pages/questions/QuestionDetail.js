import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import RightSide from '../../components/Side/RightSide';
import DetailQue from '../../components/question/DetailQue';
import QuestionTime from '../../components/question/QuestionTime';
import { getDetailQueApi } from '../../config/api';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
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
  const [datas, setDatas] = useState({});
  const { questionId } = useParams();

  console.log(questionId);

  const getDetailQue = async (questionId) => {
    try {
      const data = await getDetailQueApi(questionId);
      console.log(data);
      setDatas(data.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  //! API 받아오기
  useEffect(() => {
    getDetailQue(questionId);
  }, []);

  return (
    <Container>
      <Content>
        <QuestionHead>
          <h1>{datas.title}</h1>
          <HeadButton>
            <AskQuestionBtn />
          </HeadButton>
        </QuestionHead>
        <QuestionTime
          generatedTime={datas.generatedTime}
          modifiedTime={datas.modifiedTime}
          views={datas.views}
        />
        <QuestionContainer>
          <DetailQue
            body={datas.body}
            vote={datas.vote}
            questionId={questionId}
            listAnswer={datas.listAnswer}
          />
          <RightSide />
        </QuestionContainer>
      </Content>
    </Container>
  );
};

export default QuestionDetail;
