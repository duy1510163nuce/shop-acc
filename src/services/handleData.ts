import { TProduct } from 'components/modules/Content';
import  axios  from 'axios';
import { urlApi } from './createAxios';
// import Api from "services/Axios";

// import Api from "services/axios.ts";




export const getData = async () => {
  const response = await urlApi.get("/listProduct");
  return response.data;
};

export const getDetail = async (id:string) => {
  const {data} = await urlApi.get(`/listProduct/${id}`)
  return data
}

// export const AddProductCart = async(data:TProduct) =>{
//     const postToCart = await axios.post("https://63b926a43329392049eccf6b.mockapi.io/cart", data)

// }

// export