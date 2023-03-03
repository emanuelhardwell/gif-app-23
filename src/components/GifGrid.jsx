import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getGifsFetch } from "../helpers/getGifsFetch";
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const data = await getGifsFetch(category);
    setImages(data);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div>
      <h1>{category}</h1>
      <hr />

      <div className="card-grid">
        {images.map((image) => (
          <GridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
