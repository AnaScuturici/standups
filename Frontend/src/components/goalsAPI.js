import axios from "axios";

const API_URL = "http://[::1]:3000/api/v1/standups";

export const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

