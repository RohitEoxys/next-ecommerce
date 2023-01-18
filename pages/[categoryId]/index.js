import { useRouter } from "next/router";
import { categoryProductsData } from "@/Components/pages/Categories/ProductData/categoryProductsData";
import Card from "react-bootstrap/Card";

import CategoryItems from "../../Components/pages/Categories/CategoryItems/CategoryItems";
import classes from "./index.module.scss";

const Index = () => {
  const router = useRouter();
  const productCategoryPath = router.query.categoryId;

  const productType = categoryProductsData.filter(
    (e) => e.categoryId === productCategoryPath
  );

  return (
    <div className={classes["main_container"]}>
      <Card.Header as={"h1"} style={{ textAlign: "center", marginTop: "6rem" }}>
        {productCategoryPath}
      </Card.Header>
      <div className={classes["card_container"]}>
        {productType.map((e) => (
          <CategoryItems
            key={e.id}
            title={e.title}
            imagePath={e.imagePath}
            name={e.title}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
