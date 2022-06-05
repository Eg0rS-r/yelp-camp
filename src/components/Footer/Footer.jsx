import React from "react";
import { Link } from "react-router-dom";

import yelpLogo from "../../assets/images/logos/Logo.svg";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`container ${style.footer}` }>
			FOOTEr
      <Link to="/">
        <img className="yelp-logo" src={yelpLogo} alt="yelp camp logo" />
      </Link>
    </footer>
  );
};

export default Footer;
