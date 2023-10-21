import { NavLink } from 'react-router-dom';
import { CustomAuthNav, CustomNavButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <CustomAuthNav>
      <CustomNavButton>
        <NavLink to="/register">Register</NavLink>
      </CustomNavButton>
      <CustomNavButton>
        <NavLink to="/login">Log In</NavLink>
      </CustomNavButton>
    </CustomAuthNav>
  );
};
