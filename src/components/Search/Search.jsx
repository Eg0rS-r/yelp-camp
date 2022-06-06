import React from "react";
import { Link } from "react-router-dom";

import style from "./Search.module.scss";

const Search = () => {
  return (
    <section className={style.search}>
			<h2 className={style.title}>Welcome to YelpCamp!</h2>
			<p className={style.text}>View our hand-picked campgrounds from all over the world, or add your own.</p>
			<form className={style.form}>
				<div className={style.input_container}><input className="input input--search" type="text" placeholder="Search for camps" /></div>
				<input className="btn btn--primary" type="submit" value="Search" />
			</form>
			<Link className='link' to='/login:add'>Or add your own campground</Link>
		</section>
  );
};

export default Search;
