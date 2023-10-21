import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

import Toolbar from '@mui/material/Toolbar';
import { CustomAppBar, CustomBox, CustomStack } from './AppBar.styled';

export const MenuAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <CustomStack>
            <Navigation />
            <h1>PHONEBOOK</h1>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </CustomStack>
        </Toolbar>
      </CustomAppBar>
    </CustomBox>
  );
};
