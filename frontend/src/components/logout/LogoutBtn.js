import Button from '../../common/Button/Button';
import { removeCookie } from '../../config/cookie';

const LogoutBtn = () => {
  const logoutHandler = () => {
    removeCookie('user');
    location.replace('/');
  };

  return <Button btnName="Logout" onClick={logoutHandler} />;
};

export default LogoutBtn;
