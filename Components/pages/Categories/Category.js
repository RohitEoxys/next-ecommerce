import React from "react";

import CategoryBox from "./CategoryBoxes/CategoryBox";
import classes from "./Category.module.scss";
import { categoryData } from "./ProductData/categoryData";

const Category = () => {
  const categoryBox = categoryData.map((e) => {
    return (
      <CategoryBox
        key={e.id}
        id={e.id}
        description={e.description}
        title={e.name}
        imagePath={e.imagePath}
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
