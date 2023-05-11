import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { fetchContactsSlice } from './fetchContactsSlice';

const rootReducer = combineReducers({
  contacts: fetchContactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
