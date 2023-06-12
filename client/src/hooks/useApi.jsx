import { useState } from "react";
import API from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const call = async (payload, type = "") => {
    setLoading(true);
    setResponse(null);
    setError("");

    try {
      let res = await API(urlObject, payload, type);
      setResponse(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { call, error, loading, response };
};

export default useApi;
