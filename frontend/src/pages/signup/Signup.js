import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';
import SignupComponent from './SignupComponent';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const SignupContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Signup = () => {
  return (
    <Container>
      <Content>
        <SignupContent>
          <LeftSideBar />
          <SignupComponent />
        </SignupContent>
      </Content>
    </Container>
  );
};
export default Signup;
