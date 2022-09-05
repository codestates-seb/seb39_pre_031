import { useState } from 'react';

import styled from 'styled-components';
import AskQuestionBtn from '../../components/ask/AskQuestionBtn';
import QuestionList from '../../components/question/QuestionList';
import QuestionTab from '../../components/question/QuestionTab';
import FilterBtn from '../../components/filter/FilterBtn';
import Filter from '../../components/filter/Filter';
import RightSide from '../../components/Side/RightSide';
import Paging from '../../common/Paging';

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
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

const Pagination = styled.div`
  margin: 30px 0;
`;

const Questions = () => {
  const [showFilter, setShowFilter] = useState(false);

  const filterClickHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Page>
      <Main>
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
        <Pagination>
          <Paging />
        </Pagination>
      </Main>
      <RightSide />
    </Page>
  );
};

export default Questions;
