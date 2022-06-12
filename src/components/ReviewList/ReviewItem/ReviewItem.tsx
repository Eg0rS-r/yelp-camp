import React from "react";
import ReactTimeAgo from "react-time-ago";

import style from "./ReviewItem.module.scss";

interface ReviewItemProps {
  createdAt: string;
  name: string;
  text: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ createdAt, name, text }) => (
  <div className={style.review}>
    <h4 className={style.author}>{name}</h4>
    <span className={style.time}>
      <ReactTimeAgo date={new Date(createdAt).getTime()} locale="en-US" />
    </span>
    <p className={style.text}>{text}</p>
  </div>
);

export default ReviewItem;
