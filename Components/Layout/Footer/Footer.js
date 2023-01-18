import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.main}>
      <footer className={classes.footer_main}>
        <div className={classes["footer-left"]}>
          <h3>The world of E-Commerce</h3>

          <p className={classes["footer-links"]}>
            <a href="#">Home</a>·<a href="#">About us</a>·
            <a href="#">Contact us</a>
          </p>

          <p className={classes["footer-company-name"]}>
            The world of code &copy; 2019
          </p>
        </div>

        <div className={classes["footer-center"]}>
          <div>
            <i className={classes["fa fa-map-marker"]}></i>
            <p>
              <span>Best Shoppping</span> London, UK
            </p>
          </div>

          <div>
            <i className={classes["fa fa-phone"]}></i>
            <p>+56 9987 987654</p>
          </div>

          <div>
            <i className={classes["fa fa-envelope"]}></i>
            <p>
              <a href="#">Flipkart.com</a>
            </p>
          </div>
        </div>

        <div className={classes["footer-right"]}>
          <p className={classes["footer-company-about"]}>
            <span>About the company</span>
            Welcome to the world of Shopping, Here we are providing you the best
            platform
          </p>

          <div className={classes["footer-icons"]}>
            <a href="#">
              <i className={classes["fa fa-facebook"]}></i>
            </a>
            <a href="#">
              <i className={classes["fa fa-twitter"]}></i>
            </a>
            <a href="#">
              <i className={classes["fa fa-linkedin"]}></i>
            </a>
            <a href="#">
              <i className={classes["fa fa-github"]}></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
