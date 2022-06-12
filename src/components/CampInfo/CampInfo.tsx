import React from "react";

import style from "./CampInfo.module.scss";

interface CampInfoProps {
  imgUrl: string;
  name: string;
  price: number;
  description: string;
  addBy: string;
}

const CampInfo: React.FC<CampInfoProps> = ({
  imgUrl,
  name,
  price,
  description,
  addBy,
}) => (
  <div className={style.camp}>
    <img className={style.img} src={imgUrl} alt="mount river image" />
    <div className={style.content}>
      <h3 className={style.title}>{name}</h3>
      <span className={style.price}>${price}/night</span>
      <p className={style.text}>{description}</p>
      <i className={style.add_by}>Submitted by {addBy}</i>
    </div>
  </div>
);

export default CampInfo;
