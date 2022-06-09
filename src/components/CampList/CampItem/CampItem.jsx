import React from "react";
import { Link } from "react-router-dom";

// import campImage from "../../../assets/images/camp images/high quality images/Latik Riverside.jpg"

import style from "./CampItem.module.scss";

const CampItem = ({id, name, previewText, imgAddresComp}) => {
  return (
    <div className={style.camp_card}>
			<img className={style.img} src={imgAddresComp} alt="mount river image" />
			<h4 className={style.title}>{name}</h4>
			<p className={style.text}>{previewText}</p>
			<Link className={`btn btn--regular ${style.link}`} to={`/campground/:${id}`}>View Campground</Link>
		</div>
  );
};

export default CampItem;
