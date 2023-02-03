import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/Components/API/client";

const initialProductState = {
  productItems: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk("products", async () => {
  const response = await client.get("https://fakestoreapi.com/products");
  return response.data;
});

export const addNewProduct = createAsyncThunk(
  "posts/addNewProduct",
  async (initialProduct) => {
    const response = await client.post(
      "https://fakestoreapi.com/products",
      {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
      initialProduct
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.productItems.push(action.payload);
      });
  },
});

export const { products } = productSlice.actions;

export default productSlice;
