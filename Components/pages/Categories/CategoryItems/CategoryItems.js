import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import classes from "./categoryItems.module.scss";

const CategoryItems = (props) => {
  const products = useSelector((state) => state.products.productItems);
  console.log(products);

  const router = useRouter();
  const { categoryId } = router.query;

  const categoryItemHandler = () => {
    router.push(`./${categoryId}/productDetails/${props.name}`);
  };

  const cloudinaryImageLoader = () => {
    return props.imagePath;
  };

  return (
    <div className={classes["card-container"]}>
      <Card border="primary" style={{ margin: "1rem", cursor: "pointer" }}>
        <Image
          src={props.imagePath}
          width={300}
          height={350}
          alt={props.name}
          onClick={categoryItemHandler}
          loader={cloudinaryImageLoader}
        />

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text> Price: ₹{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryItems;
