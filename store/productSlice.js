import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateOfProducts = {
  data: [],
  status: "idle", //loading idle error
};

const productSlice = createSlice({
  name: "products",
  initialState: initialStateOfProducts,
  extraReducers: (builder) => {
    // builder pattern createAsyncThunk gives this
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

// pending: Dispatched when the async function starts.
// fulfilled: Dispatched when the async function successfully completes.
// rejected: Dispatched when the async function fails.

/* createAsyncThunk: This function generates a thunk action creator for handling asynchronous logic. It takes two arguments: 

1."product/get"redux toolkit creates three action types  pending,fullfilled and rejected
2. async ()=>{} function actually makes the api call and response will be sent to action.payload
*/
export const getProducts = createAsyncThunk(
  "product/get",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export default productSlice.reducer;
