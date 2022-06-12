import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { fetchCamp, selectCurrentItem } from "../../redux/slices/campItemSlice";

import CampInfo from "../../components/CampInfo";
import Map from "../../components/Map";
import ReviewList from "../../components/ReviewList";

import style from "./Campground.module.scss";

const Campground: React.FC = () => {
  const item = useSelector(selectCurrentItem);
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

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
        <ReviewList campId={id} />
      </div>
    </div>
  );
};

export default Campground;
