import styled from 'styled-components';
import backgroundImg from '../../assets/image/background.svg';
import AskForm from '../../components/ask/AskForm';
import SubmitButton from '../../common/SubmitButton';
import AskInfo from '../../components/ask/AskInfo.js';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
  width: 100vw;
  height: calc(100vh - 50px);
  padding: 0 24px 24px 24px;
`;

const Container = styled.div`
  width: 1216px;
`;

const HeaderBlock = styled.div`
  width: 100%;
  height: 130px;
  font-size: 27px;
  text-align: left;
  padding: 24px 0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat !important;
  background-position: right bottom !important;
  display: flex;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Ask = () => {
  return (
    <Page>
      <Container>
        <HeaderBlock>Ask a public question</HeaderBlock>
        <ContentsContainer>
          <FormBlock>
            <AskForm />
            <SubmitButton
              go="/"
              text="Review your question"
              width="150px"
              height="35px"
              color="white"
            />
          </FormBlock>
          <AskInfo />
        </ContentsContainer>
      </Container>
    </Page>
  );
};

export default Ask;
