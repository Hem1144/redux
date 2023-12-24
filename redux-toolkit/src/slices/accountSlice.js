import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
};

//* create the thunk
export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    console.log(data, "checking data");
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; //! due to immer library
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

//! Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

//! action reducer
export default accountSlice.reducer;
