import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampground } from "../../redux/slices/campgroundSlice";

import CampItem from "./CampItem";

import CampSkeleton from "./CampItem/Skeleton";

import style from "./CampList.module.scss";

const CampList = () => {
  const campgroundItems = useSelector((state) => state.campground.items);
  const isCampgorundsLoading = useSelector((state) => state.campground.status);
  const searchText = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCampground({
        searchText,
      })
    );
    console.log("camp list", campgroundItems);
  }, [searchText]);

  return (
    <div className={style.campground}>
      <ul className={style.list}>
        {isCampgorundsLoading === 'loading'
          ? [...new Array(6)].map((_, index) => <CampSkeleton key={index} />)
          : campgroundItems.map((obj) => (
              <li key={obj.id}>
                <CampItem {...obj} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default CampList;
