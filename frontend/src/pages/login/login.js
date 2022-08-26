/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OauthButton from '../../common/Button/OauthButton';
import InputForm from '../../common/InputForm';
import logoImage from '../../image/logo.png';

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
`;

const Component = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
`;

const LoginContent = styled.div`
  width: 100%;
  height: 60%;
`;

const LoginLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.span`
  display: block;
  background-image: url(${logoImage});
  width: 32px;
  height: 39px;
`;
const LoginOauth = styled.div`
  width: 100%;
  margin-bottom: 17px;
`;
const LoginForm = styled.form`
  width: 100%;
  height: 50%;
  background-color: white;
  padding: 24px;
  border-radius: 10px;
`;

const SignpLink = styled.div`
  width: 100%;
  padding: 24px;
  font-size: 16px;
  .to-signup {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    > a {
      color: #0074cc;
      font-size: 15px;
    }
    &a:visited {
      color: #0074cc;
    }
  }
`;

const Login = () => {
  return (
    <Container>
      <Content>
        <Component>
          <LoginContent>
            <LoginLogo>
              <Link to="/">
                <Logo></Logo>
              </Link>
            </LoginLogo>

            <LoginOauth>
              <OauthButton btnName="Log in with Google" />
              <OauthButton
                btnName="Log in with GitHub"
                color="white"
                backgroundColor="#2f3337"
              />
              <OauthButton
                btnName="Log in with Facebook"
                color="white"
                backgroundColor="#304986"
              />
            </LoginOauth>

            <LoginForm>
              <InputForm title="Email" type="email" />
              <InputForm
                title="Password"
                type="password"
                passwordLink="Forgot password?"
              />
              <OauthButton
                btnName="Log in"
                backgroundColor="#0074CC"
                color="white"
              />
            </LoginForm>

            <SignpLink>
              <div className="to-signup">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </div>
              <div className="to-signup">
                Are tou an employer?
                <Link to="/signup"> Sign up on Talent</Link>
              </div>
            </SignpLink>
          </LoginContent>
        </Component>
      </Content>
    </Container>
  );
};

export default Login;
