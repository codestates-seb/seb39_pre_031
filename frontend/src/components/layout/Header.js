import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';
import logoImage from '../../image/headerLogo.png';

const Container = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #f8f9f9;
  box-shadow: 5px 2px rgba(0, 0, 0, 0.1);
`;

const Head = styled.div`
  width: 82%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  position: relative;
  justify-content: center;

  .searchIcon {
    position: absolute;
    left: 5.3rem;
  }
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
    <Container>
      <Head>
        <HeaderLogo>
          <Link to="/">
            <Logo className="logo-image"></Logo>
          </Link>
        </HeaderLogo>
        <HeaderInput>
          <BiSearch className="searchIcon" />
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
    </Container>
  );
};

export default Header;
