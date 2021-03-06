import React from "react";
import { Link } from "react-router-dom";

import yelpLogo from "../../assets/images/logos/Logo.svg";

import style from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={`container ${style.footer}`}>
    <Link to="/">
      <img className="yelp-logo" src={yelpLogo} alt="yelp camp logo" />
    </Link>
  </footer>
);

export default Footer;
