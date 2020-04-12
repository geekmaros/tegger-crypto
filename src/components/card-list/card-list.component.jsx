import React from "react";
import {withRouter} from 'react-router-dom'
import "./card-list.styles.sass";
import {formatPrice} from "../../utils/formatPrice.util";
import {checkDrop} from "../../utils/checkDrop";
import {connect} from 'react-redux'
import {getSingleCrypto} from "../../redux/crypto/crypto.action";

const CardList = ({items, history, match, dispatch,getCrypto}) => {
   const {id,name, changePercent24Hr, priceUsd,symbol} = items
    const imageUrl = `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
  return (
    <div className="card" onClick={() => {
        history.push(`assets/${id}`)
        getCrypto(items)
    }}>
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
const mapDispatchToProps = dispatch => ({
    getCrypto: items => dispatch(getSingleCrypto(items))
})
export default connect(null, mapDispatchToProps)(withRouter(CardList));
