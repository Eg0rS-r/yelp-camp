import React from "react";

import style from "./CampInfo.module.scss";

const CampInfo = ({imgUrl, name, price, description, addBy}) => {
  return (
    <div className={style.camp}>
      <img className={style.img} src={imgUrl} alt="mount river image" />
      <div className={style.content}>
        <h3 className={style.title}>{name}</h3>
        <span className={style.price}>${price}/night</span>
        <p className={style.text}>
          {description}
        </p>
        <i className={style.add_by}>Submitted by {addBy}</i>
      </div>
    </div>
  );
};

export default CampInfo;
