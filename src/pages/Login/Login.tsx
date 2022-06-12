import React from "react";
import { Link } from "react-router-dom";

import ReviewPrimary from "../../components/ReviewPrimary";
import LoginForm from "../../components/LoginForm";

import style from "./Login.module.scss";

import yelpLogo from "../../assets/images/logos/Logo.svg";

const Login: React.FC = () => (
  <main className={style.login}>
    <div className={style.header}>
      <img src={yelpLogo} alt="yelp camp logo" />
      <Link to="/">← Back to campgrounds</Link>
    </div>

    <div className={style.content}>
      <LoginForm />
    </div>

    <div className={style.review}>
      <ReviewPrimary />
    </div>
  </main>
);

export default Login;
