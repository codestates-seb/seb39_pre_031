import styled from 'styled-components';

import FirstFilter from './FirstFilter';
import SecondFilter from './SecondFilter';
import ThirdFilter from './ThirdFilter';
import ApplyFilterBtn from './ApplyFilterBtn';
import SaveCustomBtn from './SaveCustomBtn';
import CancelBtn from './CancelBtn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 3px;
  background-color: hsl(210, 8%, 95%);
  border: 1px solid hsl(210, 8%, 85%);
`;

const TopBlock = styled.div`
  display: flex;
`;

const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-top: 1px solid hsl(210, 8%, 85%);
`;

const BtnContainer = styled.div``;

const Filter = (props) => {
  const cancelHandler = () => {
    props.onFilter();
  };

  // const queFilter = () => {};

  return (
    <Container>
      <TopBlock>
        <FirstFilter setNoAns={props.setNoAns} setNoSel={props.setNoSel} />
        <SecondFilter onTab={props.onTab} />
        <ThirdFilter />
      </TopBlock>
      <BottomBlock>
        <BtnContainer>
          <ApplyFilterBtn />
          <SaveCustomBtn />
        </BtnContainer>
        <CancelBtn onClick={cancelHandler} />
      </BottomBlock>
    </Container>
  );
};

export default Filter;
