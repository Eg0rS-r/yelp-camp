import React from "react";

import campImage from "../../assets/images/camp images/high quality images/Latik Riverside.jpg";

import style from "./CampInfo.module.scss";

const CampInfo = () => {
  return (
    <div className={style.camp}>
      <img className={style.img} src={campImage} alt="mount river image" />
      <div className={style.content}>
        <h3 className={style.title}>Mount Ulap</h3>
        <span className={style.price}>$104.99/night</span>
        <p className={style.text}>
          Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point
          trail located near Tuba, Benguet, Philippines that offers the chance
          to see wildlife and is rated as moderate. The trail is primarily used
          for hiking.
        </p>
        <i className={style.add_by}>Submitted by Andrew Mike</i>
      </div>
    </div>
  );
};

export default CampInfo;
