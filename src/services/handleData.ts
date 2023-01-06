import { urlApi } from './createAxios';
// import Api from "services/Axios";

// import Api from "services/axios.ts";

export const getData = async (path:string) => {
  const response = await urlApi.get(path);
  return response.data;
};
