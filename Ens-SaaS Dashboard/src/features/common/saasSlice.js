import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getAllSaaS = createAsyncThunk("saas/getAllSaaS", async () => {
  const response = await axios.get(process.env.REACT_APP_NOTIFICATION_URL);
  return response?.data;
});

export const createSaaS = createAsyncThunk("saas/createSaaS", async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_NOTIFICATION_URL}/create`,  
    data,
    {
      headers: {
        Authorization: "Bearer sample",
      },
    }
  );
  return response?.data;
});

export const updateSaaS = createAsyncThunk("saas/updateSaaS", async (data) => { //put
  const { _id, newData } = data;
  const response = await axios.put(
    `${process.env.REACT_APP_NOTIFICATION_URL}/${_id}`,
    newData,
    {
      headers: {
        Authorization: "Bearer sample",
      },
    }
  );
  return response?.data;
});

export const deleteSaaS = createAsyncThunk("saas/deleteSaaS", async (id) => { //delete
  await axios.delete(`${process.env.REACT_APP_NOTIFICATION_URL}/${id}`, {
    headers: {
      Authorization: "Bearer sample",
    },
  });
  return id; 
});

const saasSlice = createSlice({
  name: "saas",
  initialState: {
    saasListData: [],
    createSaaSMessage: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllSaaS.fulfilled, (state, action) => {
      state.saasListData = action.payload;
    });
    builder.addCase(createSaaS.fulfilled, (state, action) => {
      state.createSaaSMessage = action.payload;
    });
    builder.addCase(updateSaaS.fulfilled, (state, action) => {
      const index = state.saasListData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.saasListData[index] = action.payload;
      }
    });
    builder.addCase(deleteSaaS.fulfilled, (state, action) => {
      state.saasListData = state.saasListData.filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export default saasSlice.reducer;
