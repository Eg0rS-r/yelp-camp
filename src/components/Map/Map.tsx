import React from "react";

import mapImage from "../../assets/images/camp images/Map.jpg";

import style from "./Map.module.scss";

const Map: React.FC<{ coord: string }> = ({ coord }) => (
  <div className={style.map}>
    <img src={mapImage} alt={`map image ${coord}`} />
  </div>
);

export default Map;
