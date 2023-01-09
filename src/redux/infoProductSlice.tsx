import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { TProduct } from "components/modules/Content";
import { getData } from "services/handleData";

export const getListProduct = createAsyncThunk("/listProduct", async () => {
  const listInfoProduct = await getData();
  return listInfoProduct;
});

// const listProduct: TProduct[] = []

const listInfoProduct = createSlice({
  name: "listInfoProduct",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListProduct.pending, () => {})
      .addCase(getListProduct.rejected, () => {})
      .addCase(getListProduct.fulfilled, (state, actions) => {
        state = actions?.payload;
        return state;
      });
  },
});
export default listInfoProduct.reducer;
