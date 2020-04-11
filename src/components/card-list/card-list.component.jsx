import React from "react";

import "./card-list.styles.sass";
import {formatPrice} from "../../utils/formatPrice.util";
import {checkDrop} from "../../utils/checkDrop";

const CardList = ({items}) => {
   const {id,name, changePercent24Hr, priceUsd,symbol} = items
    const imageUrl = `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
  return (
    <div className="card">
      <div className="card-front flex flex-column justify-content-center align-items-center  "
           // style={{backgroundImage: `url(${imageUrl})`}}
      >
        <img src={imageUrl} alt={name} />
        <span className="crypto-name"> {name}</span>
      </div>

      <div className="card-back flex flex-column justify-content-around align-items-center ">
          <img src={imageUrl} alt={name} />
        <span className="bit-name"> {name}</span>
        <div className={checkDrop(changePercent24Hr) ? 'red' : 'green'}>
            {formatPrice(parseFloat(changePercent24Hr), 2)}%
        </div>
        <span>Price: $ {priceUsd}</span>

      </div>
    </div>
  );
};

export default CardList;
