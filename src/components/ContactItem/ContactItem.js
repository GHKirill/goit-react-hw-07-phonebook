import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import css from './ContactItem.module.css';
import { fetchDeleteContact } from 'redux/operations';

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();
  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{phone}</span>
      <IconButton
        type="button"
        onClick={() => dispatch(fetchDeleteContact({ id }))}
        aria-label="delete"
      >
        delete
      </IconButton>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
