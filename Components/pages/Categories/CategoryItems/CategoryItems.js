import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./categoryItems.module.scss";

const CategoryItems = (props) => {
  const router = useRouter();
  const { categoryId } = router.query;
  // const imageWidth =

  const categoryItemHandler = () => {
    router.push(`./${categoryId}/productDetails/${props.name}`);
  };

  return (
    <div className={classes["card-container"]}>
      <Card border="primary" style={{ margin: "1rem", cursor: "pointer" }}>
        <Image
          src={require(`../../../../Assets/Categories/CategoryProducts/${props.imagePath}.webp`)}
          width={300}
          height={350}
          alt={props.name}
          onClick={categoryItemHandler}
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
