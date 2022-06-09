import React from "react";
// import { Link } from "react-router-dom";

// import campImage from "../../../assets/images/camp images/high quality images/Latik Riverside.jpg"

import style from "./ReviewItem.module.scss";

const ReviewItem = () => {
  return (
    <div className={style.review}>
      <h4 className={style.author}>Isaac Dylan</h4>
      <span className={style.time}>1 day ago</span>
      <p className={style.text}>
        Traveling changes you as a person, you gain more perspective, this is
        the perfect spot to do that.
      </p>
    </div>
  );
};

export default ReviewItem;
