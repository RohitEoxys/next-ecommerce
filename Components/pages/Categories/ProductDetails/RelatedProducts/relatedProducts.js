import Card from "react-bootstrap/Card";
import Image from "next/image";

import classes from "./relatedProducts.module.scss";

const relatedProducts = (props) => {
  return (
    <div className={classes["main_container"]}>
      <Card border="info" style={{ margin: "1rem", cursor: "pointer" }}>
        <Image
          src={require(`../../../../../Assets/Categories/CategoryProducts/${props.imagePath}.webp`)}
          width={200}
          height={200}
          alt={props.title}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default relatedProducts;
