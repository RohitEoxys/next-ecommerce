import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { wrapper, State } from "@/store/store";

import CategoryItems from "../../Components/pages/Categories/CategoryItems/CategoryItems";
import classes from "./index.module.scss";

const Index = (props) => {
  return (
    <div className={classes["main_container"]}>
      <Card.Header as={"h1"} style={{ textAlign: "center", marginTop: "6rem" }}>
        {productCategoryPath}
      </Card.Header>
      <div className={classes["card_container"]}>
        {props.productType.map((e) => (
          <CategoryItems
            key={e.id}
            title={e.title}
            imagePath={e.image}
            name={e.title}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async ((store) => {
  // const products = useSelector((state) => state.products.productItems);
  const products = useSelector((state) => state.products.productItems);
  const categoryPaths = products.map((e) => e.category);
  console.log(products);
  return {
    fallback: false,
    paths: [
      {
        params: {
          categoryId: categoryPaths,
        },
      },
    ],
  };
};

export const getStaticProps = wrapper.getStaticProps( (store) => async(context) => {
  const categoryId = context.params.categoryId;

  const products = useSelector((state) => state.products.productItems);

  const productType = products.filter((e) => e.category === categoryId);

  return { props: { productType } };
});
// export const getStaticProps = async (context) => {
//   const categoryId = context.params.categoryId;

//   const products = useSelector((state) => state.products.productItems);

//   const productType = products.filter((e) => e.category === categoryId);

//   return { props: { productType } };
// };

export default Index;
