import styled from 'styled-components';
import AskForm from '../../components/ask/AskForm';
import SubmitButton from '../../common/Button/SubmitButton';
import AskInfo from '../../components/ask/AskInfo.js';

const AskContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.div`
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
      <FormContainer>
        <HeaderTxt>Ask a public question</HeaderTxt>
        <AskForm />
        <SubmitButton
          go="/"
          btnName="Review your question"
          width="150px"
          height="35px"
          color="white"
        />
      </FormContainer>
      <AskInfo />
    </AskContainer>
  );
};

export default Ask;
