import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  fetchCampground,
  selectCampgroundsStatus,
  selectItems,
} from "../../redux/slices/campgroundSlice";
import { selectSearchText } from "../../redux/slices/searchSlice";
import { useAppDispatch } from "../../redux/store";

import CampItem from "./CampItem";
import CampSkeleton from "./CampItem/Skeleton";

import style from "./CampList.module.scss";

const CampList: React.FC = () => {
  const searchText = useSelector(selectSearchText);
  const campgroundItems = useSelector(selectItems);
  const isCampgorundsLoading = useSelector(selectCampgroundsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCampground(searchText));
  }, [searchText]);

  return (
    <div className={style.campground}>
      <ul className={style.list}>
        {isCampgorundsLoading === "loading"
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
