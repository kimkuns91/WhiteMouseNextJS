import axios from "axios";
import { apiURL } from "./apiURL";

export const findAllPosts = async () => {
  const response = await axios.get(apiURL + "post");
  return response.data
};
