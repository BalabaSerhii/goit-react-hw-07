import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://667321076ca902ae11b3370c.mockapi.io";

export const delContact = createAsyncThunk(
  "contacts/delContact",
  async (contactId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCont = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/contacts");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCont = createAsyncThunk(
  "contacts/addCont",
  async ({ name, number }, thunkAPI) => {
    try {
      const resp = await axios.post("/contacts", { name, number });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
