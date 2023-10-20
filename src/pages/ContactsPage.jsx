import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { selectIsLoading, selectError } from 'redux/selectors.js';
import { fetchContacts } from 'redux/operations.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <GlobalStyle />
    </div>
  );
};

export default ContactsPage;
