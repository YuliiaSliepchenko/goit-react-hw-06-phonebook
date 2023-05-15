import { createSlice, nanoid } from '@reduxjs/toolkit';
import { FirstState } from './const';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialValue = { contacts: FirstState };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValue,
  reducers: {
    contactAdd: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { contactAdd, deleteContact } = contactsSlice.actions;
export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
