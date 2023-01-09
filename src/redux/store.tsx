import { configureStore } from "@reduxjs/toolkit";
import  dataCartSlice  from "./DataCartSlice";
import  listInfoProduct  from "./infoProductSlice";




const store = configureStore({
    reducer: {
        listInfoProduct: listInfoProduct,
        dataCartSlice:dataCartSlice
    },
});
export default store;