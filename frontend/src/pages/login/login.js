/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user';

import styled from 'styled-components';
import InputForm from '../../common/InputForm';
// import { loginApi } from '../../config/api';
import logoImage from '../../image/logo.png';
import LoginBtn from './loginBtn';
import OauthBtn from './OauthBtn';
import { checkValidForm } from '../../utils/checkValid';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;

  @media (max-width: 660px) {
    width: 267px;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
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
  font-size: 13px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 24px;
  border-radius: 10px;
`;

const SignpLink = styled.div`
  width: 100%;
  padding: 24px;
  font-size: 13px;
  .to-signup {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    > a {
      color: #0074cc;
      font-size: 13px;
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

  //! 로그인 api

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

    // const body = JSON.stringify(userInfo);

    // console.log(body);

    // try {
    //   const { Authorization } = await loginApi(body);
    //   console.log(Authorization);
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(login('hyejin'));

    // fetch('http://localhost:8080/members/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    // console.log(JSON.stringify(userInfo));

    navigate('/');
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Login;
