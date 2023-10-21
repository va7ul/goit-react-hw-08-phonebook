import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { CustomUserMenu, NavButton } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <CustomUserMenu>
      <p>Welcome, {userName}</p>
      <NavButton onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </NavButton>
    </CustomUserMenu>
  );
};
