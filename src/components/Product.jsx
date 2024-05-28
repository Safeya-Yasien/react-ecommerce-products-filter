import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { product } = props;

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">{product.price} $</p>
        <button className="btn see-details">
          <Link to="" className="btn btn-primary">
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
