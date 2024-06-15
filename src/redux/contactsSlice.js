import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: crypto.randomUUID(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactSlice.reducer;
