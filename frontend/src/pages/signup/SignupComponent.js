/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OauthButton from '../../common/Button/OauthButton';
import InputForm from '../../common/InputForm';
import SignupBtn from './SignupBtn';

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
  height: 55%;
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

  //* onChaneHandler
  const nameHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = () => {
    const userInfo = {
      username,
      email,
      password,
    };

    console.log(userInfo);
    console.log(JSON.stringify(userInfo));

    fetch('http://localhost:8080/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    console.log(JSON.stringify(userInfo));
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
      <SingupForm>
        <InputForm title="Display name" type="text" onChange={nameHandler} />
        <InputForm title="Email" type="email" onChange={emailHandler} />
        <InputForm
          title="Password"
          type="password"
          onChange={passwordHandler}
        />
        <SignupBtn
          go="/"
          btnName="Sign up"
          backgroundColor="#0074CC"
          color="white"
          type="submit"
          width="100%"
          height="37px"
          onClick={submitHandler}
        />
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
