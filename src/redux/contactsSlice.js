import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { fetchCont, addCont, dellContact } from "./contactsFe";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCont.pending, handlePending)
      .addCase(fetchCont.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCont.rejected, handleRejected)
      .addCase(addCont.pending, handlePending)
      .addCase(addCont.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addCont.rejected, handleRejected)
      .addCase(dellContact.pending, handlePending)
      .addCase(dellContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(dellContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectContactsFilter = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFiltr) => {
    return contacts.filter(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase().includes(nameFiltr.toLowerCase())
    );
  }
);
