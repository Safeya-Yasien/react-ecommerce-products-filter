import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const api_url = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${api_url}/${productId}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [api_url, productId]);

  return (
    <div className="product-details">
      <div className="container">
        <div className="row">
          <div className="col">
            <Product product={product} detailsButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
