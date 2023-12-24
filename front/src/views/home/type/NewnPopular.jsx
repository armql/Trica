import React, { Fragment } from "react";
import FreshProduct from "../contents/FreshProducts/FreshProduct";
import PopularProduct from "../contents/PopularProducts/PopularProduct";
import OurBrands from "../contents/OurBrands";
import RecommendedProduct from "../contents/RecommendedProducts/RecommendedProduct";

export default function NewnPopular() {
  return (
    <Fragment>
      <FreshProduct />
      <PopularProduct />
      <OurBrands />
      <RecommendedProduct />
    </Fragment>
  );
}
