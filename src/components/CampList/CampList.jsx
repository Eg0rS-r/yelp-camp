import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CampItem from "./CampItem";

import style from "./CampList.module.scss";

const CampList = () => {
  const searchText = useSelector((state) => state.searchReducer.value);
  const [items, setItems] = useState([]);

  console.log("CampList render", searchText);

  useEffect(() => {
    axios
      .get(
        `https://629b555acf163ceb8d17dbbd.mockapi.io/campgrounds?search=${searchText}`
      )
      .then((res) => {
        setItems(res.data);
        console.log(res);
      });
  }, [searchText]);

  return (
    <div className={style.campground}>
      <ul className={style.list}>
        {items.map((obj) => (
          <li key={obj.id}>
            <CampItem {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampList;
