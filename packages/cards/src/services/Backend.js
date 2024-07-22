import axios from "axios";
import { URL_BACKEND } from "../constants";

export async function getProducts(queryParams) {
  try {
    const { data } = await axios.get(`${URL_BACKEND}/products${queryParams}`);
    return data;
  } catch (error) {
    return [];
  }
}
