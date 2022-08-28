import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';
import logoImage from '../../image/headerLogo.jpeg';

const Head = styled.header`
  width: 100;
  height: 50px;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    height: 30px;
    border-radius: 3px;
    padding: 5px 35px;
    font-size: 13px;
    border: 1px solid #babfc3;
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
        <input placeholder="Search..." />
      </HeaderInput>
      <HeaderLogin>
        <SubmitButton
          go="/login"
          btnName="Log In"
          backgroundColor="#C7DCF5"
          color="#3F94F8"
        />
        <SubmitButton go="/signup" btnName="Sign Up" color="white" />
      </HeaderLogin>
    </Head>
  );
};

export default Header;
