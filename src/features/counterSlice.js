// src/features/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { client } from '@/api/client'; // Assume you have a client setup for API calls

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake'); 
  const result = response.json();// Replace with your API endpoint
  return result;
});

const apiSlice = createSlice({
  name: 'apis',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;