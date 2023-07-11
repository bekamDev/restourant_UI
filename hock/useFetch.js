import { useState, useEffect } from "react";

import axios from "axios";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-web";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // const options = {
  //   method: "GET",
  //   url: "https://themealdb.p.rapidapi.com/filter.php",
  //   params: { c: "Seafood" },
  //   headers: {
  //     "X-RapidAPI-Key": "adbd091802msh2c857463d0bef40p1962c6jsnbfb002891a93",
  //     "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  //   },
  // };

  const options = {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/search",
    params: { q: "pizza" },
    headers: {
      "X-RapidAPI-Key": "adbd091802msh2c857463d0bef40p1962c6jsnbfb002891a93",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
