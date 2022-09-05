import styled from 'styled-components';
import AskForm from '../../components/ask/AskForm';
import AskInfo from '../../components/ask/AskInfo.js';
import backgroundImg from '../../image/background.svg';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(210, 8%, 95%);
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 0 24px 24px 24px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }
`;

const Ask = () => {
  return (
    <Page>
      <Container>
        <HeaderBlock>Ask a public question</HeaderBlock>
        <ContentsContainer>
          <AskForm />
          <AskInfo />
        </ContentsContainer>
      </Container>
    </Page>
  );
};

export default Ask;
