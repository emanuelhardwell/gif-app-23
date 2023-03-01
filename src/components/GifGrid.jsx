import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getGifsFetch } from "../helpers/getGifsFetch";

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

      {images.map((image) => (
        <div className="card-grid" key={image.url}>
          <div className="card">
            <p>{image.title}</p>
            <img src={image.url} alt={image.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
