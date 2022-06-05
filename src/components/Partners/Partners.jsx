import React from "react";
// import { Link } from "react-router-dom";

// import yelpLogo from "../../assets/images/logos/Logo.svg";
import airbnbLogo from "../../assets/images/logos/Airbnb.svg";
import bookingLogo from "../../assets/images/logos/Booking.svg";
import plumGuideLogo from "../../assets/images/logos/Plum Guide.svg";

import style from "./Partners.module.scss";

const Partners = () => {
  return (
    <div className={style.partners}>
      <p className={style.title}>Partnered with:</p>
			<ul className={style.list}>
				<li className={style.item}><a className={style.link} href="https://www.airbnb.com/"><img className={style.img} src={airbnbLogo} alt='Airbnb logo' /></a></li>
				<li className={style.item}><a className={style.link} href="https://www.booking.com/"><img className={style.img} src={bookingLogo} alt='Booking.com logo' /></a></li>
				<li className={style.item}><a className={style.link} href="https://www.plumguide.com/"><img className={style.img} src={plumGuideLogo} alt='Plum Guide logo' /></a></li>
			</ul>
    </div>
  );
};

export default Partners;
