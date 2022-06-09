import React from "react";
import { Link } from "react-router-dom";

import ReviewItem from "./ReviewItem";

import style from "./ReviewList.module.scss";

const ReviewList = () => {
  const numbers = [1, 2, 3];
  const listItems = numbers.map((_, index) => <li className={style.item} key={index}><ReviewItem /></li>);

  return (
    <div className={style.review_list}>
      <ul className={style.list}>
        {listItems}
      </ul>
			<Link className={`btn btn--primary ${style.button}`} to="login">Leave a Review</Link>
    </div>
  );
};

export default ReviewList;
