import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');

    if (checkContactAsCurrent(name)) {
      alert(`${name} is already is in contacts`);
      return;
    }
    //const phone = number;
    dispatch(fetchAddContact({ name, number }));
  };

  const checkContactAsCurrent = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  const styledButtonAfterClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
  };

  const idName = nanoid();
  const idNumber = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={idName} className={css.formLabel}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        id={idName}
        onChange={handleInputChange}
      />
      <label htmlFor={idNumber} className={css.formLabel}>
        Phone
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        id={idNumber}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className={css.button}
        onClick={styledButtonAfterClick}
      >
        Add Contact
      </button>
    </form>
  );
}
