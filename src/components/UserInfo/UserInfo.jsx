import React from "react";

import campImage from "../../assets/images/users/User Testimonial.svg"

import style from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={style.user}>
			<img className={style.avatar} src={campImage} alt="user avatar" />
			<div className={style.info}>
				<h5>May Andrews</h5>
				<p>Professional Hiker</p>
			</div>
    </div>
  );
};

export default UserInfo;
