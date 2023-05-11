import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  //const firstRender = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  // if (contacts.length === 0) return;
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {contacts.map(({ id, name, phone }) => (
            <li key={id} className={css.contactItem}>
              <ContactItem
                className={css.contactItem}
                name={name}
                phone={phone}
                id={id}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
