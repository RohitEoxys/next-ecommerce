import { useRouter } from "next/router";

import ProductDetails from "@/Components/pages/Categories/ProductDetails/ProductDetails";
import { categoryProductsData } from "@/Components/pages/Categories/ProductData/categoryProductsData";

const index = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const itemDetails = categoryProductsData.filter((e) => e.title === productId);

  return (
    <>
      {itemDetails.map((e) => (
        <ProductDetails
          key={e.id}
          name={e.title}
          imagePath={e.imagePath}
          price={e.price}
          description={e.description}
        />
      ))}
    </>
  );
};

export default index;
