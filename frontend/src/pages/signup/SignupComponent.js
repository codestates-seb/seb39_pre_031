/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OauthButton from '../../common/Button/OauthButton';
import InputForm from '../../common/InputForm';

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
        <InputForm title="Display name" type="text" />
        <InputForm title="Email" type="email" />
        <InputForm title="Password" type="password" />
        <OauthButton
          btnName="Sign up"
          backgroundColor="#0074CC"
          color="white"
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
