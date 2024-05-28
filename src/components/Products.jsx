import React, { useEffect, useState } from "react";

import "./About.css";
import "./Products.css";
import Product from "./Product";
import Categories from "./Categories";

const Products = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategries] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`${api_url}`);
    const data = await response.json();
    setProducts(data);
  };
  const fetchCategories = async () => {
    const response = await fetch(`${api_url}/categories`);
    const data = await response.json();
    setCategries(data);
  };
  const filterProducts = async (category) => {
    if (category === "All") {
      fetchProducts();
    } else {
      const response = await fetch(`${api_url}/category/${category}`);
      const data = await response.json();
      setProducts(data);
    }
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="categories mb-5">
              <button
                type="button"
                className="btn btn-primary ms-3"
                onClick={() => filterProducts("All")}
              >
                All
              </button>
              {categories.map((category) => {
                return (
                  <Categories
                    category={category}
                    key={category}
                    filterProducts={filterProducts}
                  />
                );
              })}
            </div>
          </div>
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-3" key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
