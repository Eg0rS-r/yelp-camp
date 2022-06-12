import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ReviewItem from "./ReviewItem";

import { useAppDispatch } from "../../redux/store";
import {
  fetchReviews,
  selectReviews,
  selectStatus,
} from "../../redux/slices/reviewSlice";

import style from "./ReviewList.module.scss";

interface ReviewListProps {
	campId: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ campId }) => {
  const reviews = useSelector(selectReviews);
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews(campId));
  }, [campId]);

  return (
    <div className={style.review_list}>
      <ul className={style.list}>
        {reviews.length
          ? reviews.map((obj) => (
              <li className={style.item} key={obj.id}>
                <ReviewItem {...obj} />
              </li>
            ))
          : status !== "loading" && <h3>No reviews yet 😔</h3>}
      </ul>
      <Link className={`btn btn--primary ${style.button}`} to="login">
        Leave a Review
      </Link>
    </div>
  );
};

export default ReviewList;
