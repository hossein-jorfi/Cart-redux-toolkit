import { createSlice } from "@reduxjs/toolkit";
import { shopProduct } from "@/types/shopTypes";

const initialState: {
  products: shopProduct[];
  totalCount: number;
  totalPrice: number;
} = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.totalCount++;
      if (state.products.find((i) => i.id === action.payload.id)) {
        console.log("exist");
        state.products.map((item) => {
          if (item.id === action.payload.id) {
            item.count = (item.count as number) + 1;
          }
        });
      } else {
        console.log("no exist");
        state.products.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;
