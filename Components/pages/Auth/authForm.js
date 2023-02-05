import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import classes from "./authForm.module.scss";
import { useForm } from "@/Components/Hooks/form-hook";
import Input from "@/Components/ui/input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/Components/util/validators";
import { authActions } from "@/store/store";
import Card from "../../ui/card";

const authForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const dispatch = useDispatch();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loginClickHandler = () => {};

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login(true));
    localStorage.setItem("logged-In", true);
    console.log(formState.inputs);
  };

  return (
    <div className={classes["form_container"]}>
      <Card>
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="email"
              type="text"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter Name."
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <div className={classes["submit_btn"]}>
            <Button
              type="submit"
              disabled={!formState.isValid}
              onClick={loginClickHandler}
            >
              {isLoginMode ? "LOGIN" : "SIGNUP"}
            </Button>
          </div>
        </form>

        <div className={classes["switch_btn"]}>
          <Button onClick={switchModeHandler}>
            SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default authForm;
