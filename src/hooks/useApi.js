import axios from "axios";
import { useState, useEffect } from "react";

const dndapi = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
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
