import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});


export const getAllProduct = async () => {
  const res = await api.get("/products?limit=0");
  return res
};

export const getSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res;
  
}
