import { useDispatch } from 'react-redux';
import { logout } from '../../store/user';
import { persistor } from '../../store';
import Button from '../../common/Button/Button';
import { removeCookie } from '../../config/cookie';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    persistor
      .purge()
      .then(() => dispatch(logout()))
      .then(() => location.reload());

    removeCookie('accessToken');
  };

  return <Button btnName="Logout" onClick={logoutHandler} />;
};

export default LogoutBtn;
