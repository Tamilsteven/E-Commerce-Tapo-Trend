 import {configureStore} from "@reduxjs/toolkit";
 import postReducer from "./Product/Shopslice"
 import cartReducer from "./Product/Cartslice"
 export const Store = configureStore({
         reducer:{
           posts:postReducer,
           cart:cartReducer
         
         }
 })