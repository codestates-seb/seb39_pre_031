/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputForm from '../../common/InputForm';
import logoImage from '../../image/logo.png';
import LoginBtn from './loginBtn';
import OauthBtn from './OauthBtn';

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
  width: 27%;
  display: flex;
  align-items: center;
`;

const LoginContent = styled.div`
  width: 100%;
  height: 80%;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = () => {
    const userInfo = {
      email,
      password,
    };
    console.log('good');
    console.log(userInfo);

    fetch('http://localhost:8080/members/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    console.log(JSON.stringify(userInfo));
  };

  return (
    <Container>
      <Content>
        <Component>
          <LoginContent>
            <LoginLogo>
              <Link to="/">
                <Logo />
              </Link>
            </LoginLogo>

            <LoginOauth>
              <OauthBtn btnName="Log in with Google" />
              <OauthBtn
                btnName="Log in with GitHub"
                color="white"
                backgroundColor="#2f3337"
              />
              <OauthBtn
                btnName="Log in with Facebook"
                color="white"
                backgroundColor="#304986"
              />
            </LoginOauth>

            <LoginForm>
              <InputForm title="Email" type="email" onChange={emailHandler} />
              <InputForm
                title="Password"
                type="password"
                passwordLink="Forgot password?"
                onChange={passwordHandler}
              />
              <LoginBtn
                go="/"
                btnName="Log in"
                type="submit"
                backgroundColor="#0074CC"
                color="white"
                marginTD="2rem"
                width="100%"
                height="37px"
                onClick={submitHandler}
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
