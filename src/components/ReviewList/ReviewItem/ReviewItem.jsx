import React from "react";
import ReactTimeAgo from "react-time-ago";

import style from "./ReviewItem.module.scss";

const ReviewItem = ({ createdAt, name, text }) => {
  return (
    <div className={style.review}>
      <h4 className={style.author}>{name}</h4>
      <span className={style.time}>
        <ReactTimeAgo date={new Date(createdAt).getTime()} locale="en-US" />
      </span>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default ReviewItem;
