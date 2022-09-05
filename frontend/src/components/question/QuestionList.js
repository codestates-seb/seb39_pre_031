import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import { Data } from '../../mocks/Data';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { homeApi, questionApi } from '../../config/api';

const Container = styled.div`
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-left: -24px;
`;

//TODO home과 question api 호출 위치

const QuestionList = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      try {
        const data = homeApi(); //! body 작성해서 함수에 넣어주기
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (pathname === '/questions') {
      try {
        const data = questionApi(); //! body 작성해서 함수에 넣어주기
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <Container>
      {Data.map((item, idx) => (
        <QuestionItem key={idx} contents={item} />
      ))}
    </Container>
  );
};

export default QuestionList;
