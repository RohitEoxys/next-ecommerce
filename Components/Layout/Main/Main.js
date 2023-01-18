import React from "react";

import classes from "./Main.module.scss";
import Slider from "./Slider/Slider";
import Categories from "../../pages/Categories/Category";
import Aboutus from "@/Components/pages/AboutUs/Aboutus";

const Home = () => {
  return (
    <>
      <div className={classes["home_container"]}>
        <Slider />
        <Categories />
        <Aboutus />
      </div>
    </>
  );
};

export default Home;
