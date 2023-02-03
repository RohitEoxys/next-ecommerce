import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

import classes from "./Aboutus.module.scss";

const Aboutus = () => {
  return (
    <>
      <div className={classes["heading"]}>
        <Card.Header as="h1" style={{ textAlign: "center" }}>
          About Us
        </Card.Header>
      </div>
      <div className={classes["main_container"]}>
        <div className={classes["main_container-right"]}>
          <p>
            M-commerce Online transactions that take place on mobile devices are
            known as mobile commerce or “m-commerce.” With portable devices in
            the hands of consumers worldwide, it's no wonder m-commerce is
            expected to overtake non-mobile commerce in 2021. Many people now do
            their product research and online purchasing through their phones.
            This trend shows no signs of slowing, so it’s essential to optimize
            your online store for mobile. Enterprise ecommerce Enterprise
            ecommerce is the buying and selling of products to large companies
            or organizations. If a large business sells many different types of
            products or has multiple brand lines and transitions into selling
            online, then it is participating in enterprise ecommerce.
          </p>
        </div>
        <div className={classes["main_container-left"]}>
          <Image
            src={require("../../../Assets/Aboutus/background.jpg")}
            height={500}
            width={600}
            alt="shopping"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
