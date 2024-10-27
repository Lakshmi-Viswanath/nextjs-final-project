import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], 
  customerInfo: {}, 
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    updateCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
   },
});

export const { setCartItems, updateCustomerInfo, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
