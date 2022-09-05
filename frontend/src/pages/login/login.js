/* eslint-disable react/no-unescaped-entities */
import { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user';

import styled from 'styled-components';
import InputForm from '../../common/InputForm';
import { loginApi } from '../../config/api';
import logoImage from '../../image/logo.png';
import LoginBtn from './loginBtn';
import OauthBtn from './OauthBtn';
import { checkValidForm } from '../../utils/checkValid';
import { setCookie } from '../../config/cookie';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  //TODO 로그인 api 호출 위치

  const submitHandler = async (e) => {
    e.preventDefault();

    setErrorEmail(null);
    setErrorPassword(null);

    if (!checkValidForm(email, password, setErrorEmail, setErrorPassword))
      return;

    const userInfo = {
      email,
      password,
    };

    console.log(userInfo);

    let now = new Date();
    let after1m = new Date();
    after1m.setMinutes(now.getMinutes() + 1); // after1m을 현재시간의 1분후로 정의

    try {
      const data = await loginApi(userInfo);
      const authorization = data.headers.authorization;

      // 쿠키에 저장할 내용
      const tokenBody = {
        email,
        authorization,
      };

      setCookie('accessToken', tokenBody, {
        path: '/',
        expires: after1m,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch(login('hyejin'));

    navigate('/');
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

            <LoginForm onSubmit={submitHandler}>
              <InputForm
                title="Email"
                type="email"
                onChange={emailHandler}
                error={errorEmail}
              />
              <InputForm
                title="Password"
                type="password"
                passwordLink="Forgot password?"
                onChange={passwordHandler}
                error={errorPassword}
              />
              <LoginBtn btnName="Log in" type="submit" width="100%" />
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
