import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  //const firstRender = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    //   if (firstRender.current) {
    //     firstRender.current = true;
    //     return;
    //   }
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectFilteredContacts);
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
