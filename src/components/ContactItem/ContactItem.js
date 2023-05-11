import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import css from './ContactItem.module.css';
import { fetchDeleteContact } from 'redux/operations';

export default function ContactItem({ id, name, phone }) {
  const [buttonIsLoad, setButtonIsLoad] = useState(false);
  const dispatch = useDispatch();
  // const handleDeleteButton = id => {
  //   dispatch(fetchDeleteContact({ id }));
  //   setButtonIsLoad(true);
  // };
  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{phone}</span>
      <IconButton
        type="button"
        loading={buttonIsLoad}
        onClick={() => {
          dispatch(fetchDeleteContact({ id }));
          setButtonIsLoad(true);
        }}
        //onClick={id => handleDeleteButton(id)}
        aria-label="delete"
        id={id}
      ></IconButton>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
