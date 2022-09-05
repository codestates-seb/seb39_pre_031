/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OauthButton from '../../common/Button/OauthButton';
import InputForm from '../../common/InputForm';
import { signupApi } from '../../config/api';
import SignupBtn from './SignupBtn';
import { checkValidForm } from '../../utils/checkValid';

const SignupContent = styled.div`
  width: 35%;
  height: 80%;
`;

const SingupOauth = styled.div`
  width: 100%;
  margin-bottom: 17px;
`;

const SingupForm = styled.form`
  width: 100%;
  background-color: white;
  padding: 24px;
  border-radius: 10px;
`;

const LoginLink = styled.div`
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

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const navigate = useNavigate();

  const nameHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  //TODO 회원가입 api 입력 위치
  const submitHandler = async (e) => {
    e.preventDefault();

    setErrorEmail(null);
    setErrorPassword(null);

    if (!checkValidForm(email, password, setErrorEmail, setErrorPassword))
      return;

    const userInfo = {
      username,
      email,
      password,
    };

    try {
      const { id } = await signupApi(userInfo); // 회원가입 하고 나면 들어오는 값이 뭔지 확인
      console.log(id);
    } catch (error) {
      console.log(error);
    }

    navigate('/');
  };

  return (
    <SignupContent>
      <SingupOauth>
        <OauthButton btnName="Sign up with Google" />
        <OauthButton
          btnName="Sign up with GitHub"
          color="white"
          backgroundColor="#2f3337"
        />
        <OauthButton
          btnName="Sign up with Facebook"
          color="white"
          backgroundColor="#304986"
        />
      </SingupOauth>
      <SingupForm onSubmit={submitHandler}>
        <InputForm title="Display name" type="text" onChange={nameHandler} />
        <InputForm
          title="Email"
          type="email"
          onChange={emailHandler}
          error={errorEmail}
        />
        <InputForm
          title="Password"
          type="password"
          onChange={passwordHandler}
          error={errorPassword}
        />
        <SignupBtn btnName="Sign up" width="100%" type="submit" />
      </SingupForm>
      <LoginLink>
        <div className="to-signup">
          Already have an account?
          <Link to="/signup"> Log In</Link>
        </div>
        <div className="to-signup">
          Are tou an employer?
          <Link to="/signup"> Sign up on Talent</Link>
        </div>
      </LoginLink>
    </SignupContent>
  );
};

export default SignupComponent;
