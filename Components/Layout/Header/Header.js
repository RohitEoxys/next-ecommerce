import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.scss";
import { authActions } from "@/store/store";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const logoClickHandler = () => {
    router.push("/");
  };

  const logoutBtnHandler = () => {
    dispatch(authActions.logout(false));
    localStorage.removeItem("logged-In");
  };

  const loginBtnHandler = () => {
    router.push("./authentication");
    dispatch(authActions.logout(true));
    // setLoggedIn(isLoggedIn);
  };

  return (
    <>
      <header className={classes.main_container}>
        <Card.Header as="h1" onClick={logoClickHandler}>
          E-Commerce
        </Card.Header>
        {isLoggedIn ? (
          <Button
            variant="light"
            style={{ width: "6rem" }}
            onClick={logoutBtnHandler}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="light"
            style={{ width: "6rem" }}
            onClick={loginBtnHandler}
          >
            Log In
          </Button>
        )}
      </header>
    </>
  );
};

export default Header;
