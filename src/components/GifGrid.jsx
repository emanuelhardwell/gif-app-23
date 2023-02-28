import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  return (
    <div className="card-grid">
      <h1>{category}</h1>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
