import React from "react";
const Categories = (props) => {
  const { category, filterProducts } = props;

  return (
    <>
      {" "}
      <button
        type="button"
        className="btn btn-primary ms-3"
        onClick={() => filterProducts(category)}
      >
        {category}
      </button>
    </>
  );
};

export default Categories;
