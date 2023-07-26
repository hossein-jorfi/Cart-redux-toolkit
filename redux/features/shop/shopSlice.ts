import { shopProduct } from "@/types/shopTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  loading: boolean;
  products: shopProduct[];
  error: string;
} = {
  loading: false,
  products: [],
  error: "",
};

const fetchProdcuts = createAsyncThunk("products/fetchProdcuts", () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => data);
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProdcuts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProdcuts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProdcuts.rejected, (state, action) => {
      (state.loading = false), (state.products = []);
      state.error = action.error.message as string;
    });
  },
});

export default shopSlice.reducer;
export { fetchProdcuts };
