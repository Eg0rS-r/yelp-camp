import React from "react";

import mapImage from "../../assets/images/camp images/Map.jpg";

import style from "./Map.module.scss";

const Map = ({ coord }) => {
  console.log(coord);
  return (
    <div className={style.map}>
      <img src={mapImage} alt="map image" />
    </div>
  );
};

export default Map;
