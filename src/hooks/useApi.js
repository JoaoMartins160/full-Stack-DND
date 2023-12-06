import axios from "axios";
import { useState, useEffect } from "react";

export const BASE_URL = "localhost:8080";

export const dndapi = axios.create({
  baseURL: BASE_URL,
});

function useApi(url, pass) {
  const [getdata, setData] = useState([]);
  useEffect(() => {
    async function getapi() {
      try {
        const res = await dndapi.get(url);
        setData(res.data[pass]);
      } catch (error) {
        console.log(error);
      }
    }
    getapi();
  }, [url, pass]);

  return { getdata };
}

export default useApi;
