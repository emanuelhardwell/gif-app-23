import { useEffect, useState } from "react";
import { getGifsFetch } from "../helpers/getGifsFetch";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const data = await getGifsFetch(category);
    setImages(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return {
    images,
    isLoading,
  };
};
