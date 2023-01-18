import React from "react";

import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={classes.main_container}>
        <h1>E-Commerce</h1>
      </header>
    </>
  );
};

export default Header;
