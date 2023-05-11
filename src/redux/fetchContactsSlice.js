import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchDeleteContact,
  fetchAddContact,
} from './operations';

const handlePending = (state, action) => ({
  ...state,
  isLoading: true,
  error: null,
});
const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const fetchContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //==get all contacts

    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, ...action.payload],
      };
    },
    [fetchContacts.rejected]: handleRejected,

    //==delete contact

    [fetchDeleteContact.pending]: handlePending,
    [fetchDeleteContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload),
        ],
      };
    },
    [fetchDeleteContact.rejected]: handleRejected,

    //== add contact

    [fetchAddContact.pending]: handlePending,
    [fetchAddContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: [
          ...state.contacts,
          {
            name: action.payload.name,
            phone: action.payload.phone,
            id: action.payload.id,
          },
        ],
      };
    },
    [fetchAddContact.rejected]: handleRejected,
  },
});
