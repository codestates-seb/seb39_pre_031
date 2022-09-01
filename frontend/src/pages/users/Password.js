import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../../common/Button/Button';
import Input from '../../common/Input';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  border-radius: 7px;
  background-color: white;
`;

const Pragraph = styled.p`
  margin-bottom: 13px;
  font-size: 13px;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin: 2px 0;
  padding: 0 2px;
  font-weight: 600;
  font-size: 15px;
`;

const Password = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const recoveryEmailHandler = () => {
    console.log(email);
    console.log(JSON.stringify(email));

    fetch(`http://localhost:8080/members/${email}/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    navigate('/login');
  };

  return (
    <Page>
      <Card>
        <Pragraph>
          Forgot your account’s password or having trouble logging into your
          Team? Enter your email address and we’ll send you a recovery link.
        </Pragraph>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            margin="5px 0 10px 0"
            padding="7px 9px"
            onChange={emailChangeHandler}
          />
        </InputContainer>
        <Button
          btnName="Send recovery email"
          width="100%"
          onClick={recoveryEmailHandler}
        />
      </Card>
    </Page>
  );
};

export default Password;
