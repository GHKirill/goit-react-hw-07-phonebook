import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://645932154eb3f674df89c0e7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  //'contacts/fetchAll',
  'fetch/getAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data.map(({ name, phone, id }) => ({
        name,
        phone,
        id,
      }));
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteContact = createAsyncThunk(
  'fetch/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId.id}`);
      return response.data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchAddContact = createAsyncThunk(
  'fetch/AddContact',
  async ({ name, phone }, thunkApi) => {
    try {
      const response = await axios.post(`/contacts`, {
        name: name,
        phone: phone,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
