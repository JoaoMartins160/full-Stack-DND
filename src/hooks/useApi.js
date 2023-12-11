import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://localhost:8080/";

export const useApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, options) => {
    setIsLoading(true);
    try {
      const response = await axios({ url: BASE_URL + url, ...options });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, request };
};
