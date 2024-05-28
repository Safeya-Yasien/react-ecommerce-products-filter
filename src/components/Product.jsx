import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Product = (props) => {
  const { product, detailsButton } = props;

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">{product.price} $</p>
        {detailsButton && (
          <button className="btn see-details">
            <Link
              to={`/product/${product.id}`}
              path={<ProductDetails />}
              className="btn btn-primary"
            >
              Details
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
