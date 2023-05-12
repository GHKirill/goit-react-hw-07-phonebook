import ContactList from 'components/ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

import { RotatingLines } from 'react-loader-spinner';
import { selectContacts } from 'redux/selectors';
export function App() {
  const firstRenderSpinner = useRef(true);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  if (contacts?.length) {
    firstRenderSpinner.current = false;
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && firstRenderSpinner && (
          <>
            {
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="55"
                visible={true}
              />
            }
            <div> Is loading...</div>
          </>
        )}
        <ContactList />
      </div>
    </>
  );
}
