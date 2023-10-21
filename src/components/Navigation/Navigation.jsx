import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavButton, NavStack } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavStack direction="row">
        <NavButton>
          <NavLink to="/">Home</NavLink>
        </NavButton>

        {isLoggedIn && (
          <NavButton>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavButton>
        )}
      </NavStack>
    </nav>
  );
};
