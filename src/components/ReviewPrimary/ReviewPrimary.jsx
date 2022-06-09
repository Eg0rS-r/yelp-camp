import React from "react";

import UserInfo from "../UserInfo";

import style from "./ReviewPrimary.module.scss";

const ReviewItem = () => {
  return (
    <div className={style.review}>
      <div>
      	<h3 className={style.text}>
				“YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.”
	      </h3>
				<UserInfo />
      </div>
    </div>
  );
};

export default ReviewItem;
