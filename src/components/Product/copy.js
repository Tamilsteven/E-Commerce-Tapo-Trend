import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'CartItems',
  initialState: {
    CartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    AddToCart: (state, action) => {
      const Existing = state.CartItems.find((item)=>item.id === action.payload.id)
        if(Existing){
          Existing.quantity++;
        }else{
          state.CartItems.push(action.payload);
          console.log("data added to Cart")
        }
      },
      increment: (state, action) => {
        state.CartItems = state.CartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      },
    
      decrement: (state, action) => {
        state.CartItems = state.CartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      },
      getTotals: (state) => {
        let { totalQuantity, totalPrice } = state.CartItems.reduce(
            (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            },
            {
                totalPrice: 0,
                totalQuantity: 0,
            }
        );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        
          },
           
      Removecart:(state,action)=>{
            
        state.CartItems= state.CartItems.filter((item)=> item.id !== action.payload);
        console.log("data removed from CartItems")
       },
       Clearcart:(state)=>{
           state.CartItems=[]
         
       },
    
  },
});

export const { AddToCart, Removecart, increment,decrement,Clearcart ,getTotals} = cartSlice.actions;
export default cartSlice.reducer;