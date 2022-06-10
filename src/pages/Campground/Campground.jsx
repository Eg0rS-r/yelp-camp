import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCamp } from "../../redux/slices/campgroundSlice";

import CampInfo from "../../components/CampInfo";
import Map from "../../components/Map";
import ReviewList from "../../components/ReviewList";

import style from "./Campground.module.scss";

const Campground = () => {
  const item = useSelector((state) => state.campground.currentItem);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamp(id));
  }, [id]);

  return (
    <div className={style.campground}>
      <div className={style.camp_info}>
        <CampInfo {...item} />
      </div>
      <div className={style.map}>
        <Map coord={item.coord} />
      </div>
      <div className={style.review}>
        <ReviewList id={id} />
      </div>
    </div>
  );
};

export default Campground;
