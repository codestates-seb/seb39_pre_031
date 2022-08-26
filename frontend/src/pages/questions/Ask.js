import SubmitButton from '../../common/SubmitButton';

import styled from 'styled-components';
import Card from '../../common/Card';

const AskContainer = styled.div`
  height: 100vh;
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

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  div {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;
const TitleInput = styled.input`
  width: 100%;
`;

const Ask = () => {
  return (
    <AskContainer>
      <HeaderTxt>ASK a public question</HeaderTxt>
      <Card>
        <Label>
          Title
          <div>
            Be specific and imagine you’re asking a question to another person
          </div>
        </Label>
        <TitleInput />
        <Label>
          Body
          <div>
            Include all the information someone would need to answer your
            question
          </div>
        </Label>
        <Label>
          Tags
          <div>Add up to 5 tags to describe what your question is about</div>
        </Label>
      </Card>
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
