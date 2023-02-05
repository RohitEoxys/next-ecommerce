import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryBox from "./CategoryBoxes/CategoryBox";
import { categoryData } from "./ProductData/categoryData";
import classes from "./Category.module.scss";
import { fetchProducts } from "@/store/productSlice";

const Category = () => {
  const dispatch = useDispatch();
  const productStatus = useSelector((state) => state.products.status);
  console.log(productStatus);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  const categoryBox = categoryData.map((e) => {
    return (
      <CategoryBox
        key={e.id}
        id={e.id}
        description={e.description}
        title={e.name}
        imagePath={e.imagePath}
        categoryName={e.categoryName}
      />
    );
  });

  return (
    <div className={classes["category_main_container"]}>
      <div className={classes["category_main_container-title"]}>
        <h1>Product Categories</h1>
      </div>
      <div className={classes["category_main_container-categoryBox"]}>
        {categoryBox}
      </div>
    </div>
  );
};

export default Category;
