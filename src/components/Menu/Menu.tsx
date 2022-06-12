import React from "react";
import { Link, NavLink } from "react-router-dom";

import burgerMenu from "../../assets/images/icons/HamburgerMenu.svg";

import style from "./Menu.module.scss";

const Menu: React.FC = () => (
  <nav className={style.menu}>
    <button className={style.menu_button}>
      <img src={burgerMenu} alt="burger menu icon" />
    </button>
    <ul className={style.list}>
      <li className={`${style.item} ${style.item_left}`}>
        <NavLink
          className={`link ${style.link}`}
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : { fontWeight: "normal" }
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={style.item}>
        <Link className={`link ${style.link}`} to="/login">
          Login
        </Link>
      </li>
      <li className={style.item}>
        <Link className="btn btn--primary" to="/login:create">
          Create an account
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
