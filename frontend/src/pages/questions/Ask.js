import styled from 'styled-components';
import AskForm from '../../components/questions/AskForm';
import SubmitButton from '../../common/SubmitButton';

const AskContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTxt = styled.div`
  font-size: 27px;
  width: 100%;
  text-align: left;
`;

const Ask = () => {
  return (
    <AskContainer>
      <HeaderTxt>Ask a public question</HeaderTxt>
      <AskForm />
      <SubmitButton
        go="/"
        text="Review your question"
        width="150px"
        height="35px"
        color="white"
      />
    </AskContainer>
  );
};

export default Ask;
