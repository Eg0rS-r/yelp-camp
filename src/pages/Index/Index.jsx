import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Partners from "../../components/Partners";

import style from "./Index.module.scss";

import indexImageMobile from "../../assets/images/index page/Hero Image Mobile.jpg";
import indexImage from "../../assets/images/index page/Hero Image.jpg";
import yelpLogo from "../../assets/images/logos/Logo.svg";


const Index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={style.index}>
      <div className={style.logo}>
				<img src={yelpLogo} alt="yelp camp logo" />
			</div>

      {windowWidth > 768 ? (
        <img
          className={style.img}
          src={indexImage}
          alt="campground on top of the mountain"
        />
      ) : (
        <img
          className={style.img}
          src={indexImageMobile}
          alt="campground on top of the mountain"
        />
      )}

      <div className={`container ${style.content}`}>
        <h1>Explore the best camps on Earth.</h1>
        <p className={style.text}>
          YelpCamp is a curated list of the best camping spots on Earth.
          Unfiltered and unbiased reviews.
        </p>
        <ul className={style.list}>
          <li>Add your own camp suggestions.</li>
          <li>Leave reviews and experiences.</li>
          <li>See locations for all camps.</li>
        </ul>
        <Link className="btn" to="/campgrounds">
          View Campgrounds
        </Link>
        <Partners />
				<Outlet />
      </div>
    </main>
  );
};

export default Index;
