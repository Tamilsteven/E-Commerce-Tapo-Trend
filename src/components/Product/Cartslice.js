import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  CartItems: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      const existingIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.CartItems[existingIndex] = {
          ...state.CartItems[existingIndex],
          cartQuantity: state.CartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.CartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
    },
    increment: (state, action) => {
      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.CartItems[itemIndex].cartQuantity++;
        state.cartTotalQuantity+=1;
        toast.info("increased product quantity", {
          position: "bottom-right",
        });
      }
    },
    decrement(state, action) {
      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.CartItems[itemIndex].cartQuantity > 1) {
        state.CartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.CartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.CartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.CartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
    },
    Removecart(state, action) {
      state.CartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.CartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.CartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
        return state;
      });
    },
    getTotals(state,) {
      
        var { total, quantity } = state.CartItems.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
    
      
    },
    Clearcart(state) {
      state.CartItems = [];
      localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { AddToCart,increment,decrement, Removecart, getTotals, Clearcart } =
  cartSlice.actions;

export default cartSlice.reducer;
