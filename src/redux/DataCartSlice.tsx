import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "components/modules/Content";

const dataCartSlice = createSlice({
  name: "dataCartSlice",
  initialState: [],
  reducers: {
    addDataCart: (state: any, actions: any) => {
      let productDitPatch = actions.payload;

      const indexProduct = state?.findIndex(
        (item: any) => item.id === productDitPatch.id
      );
      if (indexProduct === -1) {
        state.push(productDitPatch);
      } else state[indexProduct].quantity += 1;
    },
    deleteProductCart: (state: any, action: any) => {
        let itemDitPatch = action.payload;
        const indexItem = state?.findIndex(
        (element: any) => element.id === itemDitPatch.id
      );
      if (state[indexItem].quantity < 1) {
        state.splice(indexItem,1);
      } else state[indexItem].quantity -= 1;
      
    },
  },
});
export const { addDataCart,deleteProductCart } = dataCartSlice.actions;
export default dataCartSlice.reducer;
