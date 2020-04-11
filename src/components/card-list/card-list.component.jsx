import React from "react";

import "./card-list.styles.sass";

const CardList = () => {

  return (
    <div className="card">
      <div className="card-front">
        <img src="../../logo.svg" alt="bitcoin logo" />
      </div>

      <div className="card-back">
        <span className="bit-name"> Bit Coin Name</span>
        <div> STATS</div>
        <span>Dont Crash</span>
      </div>
    </div>
  );
};

export default CardList;
