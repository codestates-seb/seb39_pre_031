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

const QuestionList = ({ tab }) => {
  const { pathname } = useLocation();
  // const [dataList, setDataList] = useState([]);

  const getHome = async () => {
    try {
      if (!tab) {
        const { data } = await homeApi('');
        // setDataList(data.result);
        console.log('nomal');
        console.log(data.result);
      }
      // if (tab) {
      //   const { data } = await homeApi(tab);
      //   console.log(data);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterHome = async () => {
    try {
      if (tab === 'Hot' || tab === 'Interesting') {
        const { data } = await homeApi(tab);
        console.log('filter');
        console.log(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getQuestion = async () => {
    try {
      const { data } = questionApi();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterQuestion = () => {};

  useEffect(() => {
    if (pathname === '/') {
      getHome();
    }
    if (pathname === '/questions') {
      getQuestion();
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') {
      getFilterHome();
    }
    if (pathname === '/questions') {
      getFilterQuestion();
    }
  }, [tab]);

  return (
    <Container>
      {Data.map((item, idx) => (
        <QuestionItem key={idx} contents={item} />
      ))}
    </Container>
  );
};

export default QuestionList;
