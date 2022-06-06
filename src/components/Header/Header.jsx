import React from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu"

import yelpLogo from "../../assets/images/logos/Logo.svg";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`container ${style.header}`}>
      <Link to="/">
        <img className="yelp-logo" src={yelpLogo} alt="yelp camp logo" />
      </Link>
			<Menu />
    </header>
  );
};

export default Header;
