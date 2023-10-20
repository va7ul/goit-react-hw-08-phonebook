import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
import { refreshUser } from 'redux/auth/authOperations.js';

const HomePage = lazy(() => import('pages/HomePage.jsx'));
const RegisterPage = lazy(() => import('pages/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        ></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
