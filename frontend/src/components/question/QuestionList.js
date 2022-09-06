import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import { homeApi, questionApi } from '../../config/api';

const Container = styled.div`
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-left: -24px;
`;

//TODO home과 question api 호출 위치

const QuestionList = ({ tab, body, questionsVolumeChange }) => {
  const { pathname } = useLocation();
  const [dataList, setDataList] = useState([]);

  const getHome = async () => {
    try {
      if (!tab) {
        const { data } = await homeApi('');
        setDataList(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterHome = async () => {
    try {
      if (tab === 'Hot' || tab === 'Interesting') {
        const { data } = await homeApi(tab);
        setDataList(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getQuestion = async (body) => {
    try {
      const data = await questionApi(body);
      setDataList(data.data.result.content);
      questionsVolumeChange(dataList.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      getHome();
    }
    if (pathname === '/questions') {
      getQuestion(body);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') {
      getFilterHome();
    }
    if (pathname === '/questions') {
      getQuestion(body);
    }
  }, [tab]);

  return (
    <Container>
      {dataList &&
        dataList.map((item) => (
          <QuestionItem key={item.questionId} contents={item} />
        ))}
    </Container>
  );
};

export default QuestionList;
