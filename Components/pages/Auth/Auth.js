import AuthForm from "./authForm";
import classes from "./auth.module.scss";

const Auth = () => {
  return (
    <div className={classes["main_container"]}>
      <AuthForm />
    </div>
  );
};

export default Auth;
