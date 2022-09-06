import { Link } from 'react-router-dom';

import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';
import logoImage from '../../image/headerLogo.png';
import SearchInput from '../search/SearchInput';
import LogoutBtn from '../logout/LogoutBtn';
import shortLogo from '../../image/logo.png';
import { getCookie } from '../../config/cookie';
import { useEffect, useState } from 'react';

const Container = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #f8f9f9;
  box-shadow: 5px 2px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #f48224;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    width: 90%;
  }
`;

const HeaderLogo = styled.div`
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

  @media (max-width: 640px) {
    background-image: url(${shortLogo});
    margin-left: 10px;
    background-repeat: no-repeat;
  }
`;

const HeaderInput = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 0 8px;
  flex-shrink: 10000;
  flex-grow: 1;

  @media (max-width: 640px) {
    display: none;
  }
`;

const HeaderLogin = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProfileBlock = styled.div`
  font-size: 12px;
  padding: 10px;
  margin: 0 2px;
  border-radius: 3px;
  color: white;
  background-color: hsl(206, 100%, 40%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

const Header = () => {
  const [cookie, setCookie] = useState({});

  useEffect(() => {
    setCookie(getCookie('user'));
  }, []);

  return (
    <Container>
      <Head>
        <HeaderLogo>
          <Link to="/">
            <Logo className="logo-image"></Logo>
          </Link>
        </HeaderLogo>
        <HeaderInput>
          <SearchInput />
        </HeaderInput>
        <HeaderLogin>
          {cookie !== undefined ? (
            <>
              <ProfileBlock>{cookie.username}</ProfileBlock>
              <LogoutBtn setCookie={setCookie} />
            </>
          ) : (
            <>
              <SubmitButton
                go="/login"
                btnName="Log In"
                backgroundColor="#e1ecf4"
                color="#3F94F8"
                hoverBackgroundColor="#B3D3EA"
              />
              <SubmitButton
                go="/signup"
                btnName="Sign Up"
                color="white"
                hoverBackgroundColor="#0074CC"
              />
            </>
          )}
        </HeaderLogin>
      </Head>
    </Container>
  );
};

export default Header;
