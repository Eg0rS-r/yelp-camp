import React from "react";

import closeImage from "../../assets/images/icons/Close.svg"

import style from "./MadeBy.module.scss";

const MadeBy = () => {
  return (
    <div className={style.madeBy}>
      <p>This project was made by <a className="link_accent" href="https://career.habr.com/eg0r-s4r" target="_blank">Egor Sarychev</a> and designed by <a className="link_accent" href="https://codewell.cc/" target="_blank">Codewell</a></p>
      <button className="close-btn">
        <img src={closeImage} alt="cross icon" />
      </button>
    </div>
  );
};

export default MadeBy;
