import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});


export const getAllProduct = async () => {
  const res = await api.get("/products?limit=0");
  return res
};
