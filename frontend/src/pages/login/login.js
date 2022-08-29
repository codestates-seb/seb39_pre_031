import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../image/logo.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = styled.span`
  display: inline-block;
  background-image: url(${logoImage});
  width: 150px;
  height: 30px;
`;
const LoginOauth = styled.div``;
const LoginContent = styled.div``;

const Login = () => {
  return (
    <Container>
      <h2>login</h2>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <LoginOauth></LoginOauth>
      <LoginContent></LoginContent>
    </Container>
  );
};

export default Login;
