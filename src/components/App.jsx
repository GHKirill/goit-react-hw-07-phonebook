import ContactList from 'components/ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';

import { RotatingLines } from 'react-loader-spinner';
export function App() {
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const firstRenderSpinner = useRef(true);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const setSpinnerUpdate = () => {
    if (firstRenderSpinner.current) {
      firstRenderSpinner.current = false;
      return;
    }
    setSpinnerVisible(false);
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && spinnerVisible && (
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
        <ContactList setSpinner={setSpinnerUpdate} />
      </div>
    </>
  );
}
