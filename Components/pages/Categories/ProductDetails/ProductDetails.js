import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./productDetails.module.scss";
import RelatedProducts from "./RelatedProducts/relatedProducts";
import { categoryProductsData } from "../ProductData/categoryProductsData";

const ProductDetails = (props) => {
  const router = useRouter();
  const categoryName = router.query.categoryId;
  const selectedProduct = router.query.productId;

  const relatedProductsData = categoryProductsData.filter((e) => {
    return e.categoryId === categoryName;
  });

  const removeSelectedProduct = relatedProductsData.filter(
    (e) => e.title !== selectedProduct
  );
  console.log(removeSelectedProduct);

  return (
    <div className={classes["main_container"]}>
      <div className={classes["card_container"]}>
        <Card style={{ width: "30rem", height: "32rem" }} border="secondary">
          <Image
            width={300}
            height={300}
            src={require(`../../../../Assets/Categories/CategoryProducts/${props.imagePath}.webp`)}
            alt={props.name}
          />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text as="h6">Price: ₹{props.price}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="secondary">Add to Cart</Button>
            <Button
              variant="primary"
              style={{ width: "7rem", marginLeft: "1rem" }}>
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className={classes["related_container"]}>
        <h2>Related Products</h2>
        <div className={classes["related_container-cards"]}>
          {removeSelectedProduct.map((e) => (
            <RelatedProducts
              imagePath={e.imagePath}
              title={e.title}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
