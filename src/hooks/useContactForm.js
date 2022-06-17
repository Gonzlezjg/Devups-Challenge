import { useState } from "react";
import axios from "axios";

export const useContactForm = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = async () => {
    try {
      setLoading(true)
      const result = await axios.request(axiosParams);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, dispatch };
};
