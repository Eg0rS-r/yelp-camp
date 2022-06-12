import React from "react";
import { Link } from "react-router-dom";

import style from "./CampItem.module.scss";

interface CampItemProps {
  id: string;
  name: string;
  previewText: string;
  imgAddresComp: string;
}

const CampItem: React.FC<CampItemProps> = ({
  id,
  name,
  previewText,
  imgAddresComp,
}) => (
  <div className={style.camp_card}>
    <img className={style.img} src={imgAddresComp} alt="mount river image" />
    <h4 className={style.title}>{name}</h4>
    <p className={style.text}>{previewText}</p>
    <Link className={`btn btn--regular ${style.link}`} to={`/campground/${id}`}>
      View Campground
    </Link>
  </div>
);

export default CampItem;
