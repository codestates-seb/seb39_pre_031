import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubmitButton from '../../common/SubmitButton';
import logoImage from '../../assets/image/headerLogo.jpeg';

const Head = styled.header`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid hsl(27, 90%, 55%);
`;

const HeaderLogo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  display: inline-block;
  background-image: url(${logoImage});
  width: 150px;
  height: 30px;
`;

const HeaderInput = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    width: 80%;
    height: 20px;
    padding: 5px 35px;
    font-size: 13px;
  }
`;

const HeaderLogin = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Head>
      <HeaderLogo>
        <Link to="/">
          <Logo className="logo-image"></Logo>
        </Link>
      </HeaderLogo>
      <HeaderInput>
        <input />
      </HeaderInput>
      <HeaderLogin>
        <SubmitButton
          go="/login"
          text="Log In"
          backgroundColor="#C7DCF5"
          color="#3F94F8"
        />
        <SubmitButton go="/signup" text="Sign Up" color="white" />
      </HeaderLogin>
    </Head>
  );
};

export default Header;
