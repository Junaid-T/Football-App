import { API_key } from "./SECRETS";
import axios from "axios";

const getData = async (url) => {
  const options = {
    method: "GET",
    url: url,
    headers: {
      "x-rapidapi-key": `${API_key}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
