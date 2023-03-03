import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

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
