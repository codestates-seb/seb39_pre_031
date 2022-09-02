import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/user';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';
import logoImage from '../../image/headerLogo.png';
import SearchInput from '../search/SearchInput';
import Button from '../../common/Button/Button';

const Container = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #f8f9f9;
  box-shadow: 5px 2px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #f48224;
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
  padding: 0 8px;
`;

const HeaderLogin = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => {
  const user = useSelector((state) => state.user.value);
  const isLogin = useSelector((state) => state.user.login);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

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
          {isLogin ? (
            <>
              {user.name}
              <Button btnName="Logout" onClick={logoutHandler} />
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
