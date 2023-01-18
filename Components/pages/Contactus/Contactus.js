import React from "react";

import classes from "./Contactus.module.scss";
import ContactForm from "../Contactus/ContactForm";
import Card from "../../ui/card";

const Contactus = () => {
  return (
    <Card>
      <div className={classes["contact-container"]}>
        <h1>Contact us</h1>
        <ContactForm />
      </div>
    </Card>
  );
};

export default Contactus;
