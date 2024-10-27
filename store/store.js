import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice"

const store = configureStore({
    reducer:{
        products:productSlice,
        checkout:checkoutSlice,
        cart:cartSlice,
        
    }
})

export default store;