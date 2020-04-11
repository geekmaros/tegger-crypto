import React from "react";

import "./card-list.styles.sass";

const CardList = ({items}) => {
   const {id,name, volumeUsd24Hr, priceUsd,symbol} = items
    const imageUrl = `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
    console.log(imageUrl)
  return (
    <div className="card">
      <div className="card-front flex flex-column justify-content-center align-items-center  "
           // style={{backgroundImage: `url(${imageUrl})`}}
      >
        <img src={imageUrl} alt={name} />
        <span className="crypto-name"> {name}</span>
      </div>

      <div className="card-back">
        <span className="bit-name"> {name}</span>
        <div> {volumeUsd24Hr}</div>
        <span>{priceUsd}</span>
      </div>
    </div>
  );
};

export default CardList;
