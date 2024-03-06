
import { createSlice } from '@reduxjs/toolkit'
import data from "../../data/Productdata"
 const Shopslice = createSlice({
       name:"posts",
       initialState:{
            //  CartItems:[],
             items:data
            
       },
       reducers:{
        //    AddToCart:(state,action)=>{
        //         state.CartItems.push(action.payload);
        //      console.log("data added on cart")
             
        //    },      
        //    Removecart:(state,action)=>{
        //        state.CartItems= state.CartItems.filter(item=> item.id !== action.payload);
        //        console.log(`data removed on cart`)
        //    },
        //    Clearcart:(state)=>{
        //       state.CartItems=[]
        //       console.log("cart cleared ")
        //    }
                   
       }

 }) 
// export const selectAllPost = (state)=>state.posts.CartItems
export const{addtocart} = Shopslice.actions
export default Shopslice.reducer;