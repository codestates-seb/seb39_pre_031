import { useState } from 'react';

import styled from 'styled-components';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import QuestionList from '../../components/question/QuestionList';
import QuestionTab from '../../components/question/QuestionTab';
import FilterBtn from '../../components/filter/FilterBtn';
import Filter from '../../components/filter/Filter';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
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
  flex-direction: column;
`;

const MidBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TotalCount = styled.div`
  font-size: 17px;
`;

const RightBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Questions = () => {
  const [showFilter, setShowFilter] = useState(false);

  const filterClickHandler = () => {
    setShowFilter(!showFilter);
  };

  console.log(showFilter);

  return (
    <Page>
      <TopContainer>
        <Headline>All Question</Headline>
        <AskQuestionBtn />
      </TopContainer>
      <MidContainer>
        <MidBlock>
          <TotalCount>22,937,347 questions</TotalCount>
          <RightBlock>
            <QuestionTab />
            <FilterBtn onClick={filterClickHandler} />
          </RightBlock>
        </MidBlock>
        {showFilter ? <Filter onFilter={filterClickHandler} /> : null}
      </MidContainer>
      <QuestionList />
    </Page>
  );
};

export default Questions;
