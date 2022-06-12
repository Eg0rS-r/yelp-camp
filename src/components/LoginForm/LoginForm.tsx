import React from "react";

import style from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  return (
    <form className={style.form}>
      <h2>Start exploring camps from all around the world.</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <label htmlFor="username">Username</label>
          <input
            className={style.input_field}
            id="username"
            type="text"
            placeholder="user_123"
          />
        </li>
        <li className={style.item}>
          <label htmlFor="password">Password</label>
          <input
            className={style.input_field}
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </li>
        <li className={style.item}>
          <input className={`btn btn--primary ${style.button}`} type="submit" value="Login" />
        </li>
      </ul>
      <p>
        Not a user yet? <a className="link_accent" href="#">Create an account</a>
      </p>
    </form>
  );
};

export default LoginForm;
