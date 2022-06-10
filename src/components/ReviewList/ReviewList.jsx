import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ReviewItem from "./ReviewItem";

import { fetchReviews } from "../../redux/slices/reviewSlice";

import style from "./ReviewList.module.scss";

const ReviewList = ({ id }) => {
  const reviews = useSelector((state) => state.review.reviews);
  const status = useSelector((state) => state.review.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [id]);

  return (
    <div className={style.review_list}>
      <ul className={style.list}>
        {reviews.length ? (
          reviews.map((obj) => (
            <li className={style.item} key={obj.id}>
              <ReviewItem {...obj} />
            </li>
          ))
        ) : status !== 'loading' && (
          <h3>No reviews yet 😔</h3>
        )}
      </ul>
      <Link className={`btn btn--primary ${style.button}`} to="login">
        Leave a Review
      </Link>
    </div>
  );
};

export default ReviewList;
