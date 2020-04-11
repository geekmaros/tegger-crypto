import {cryptoTypes} from "./crypto.types";

const cryptoState = {
    cryptoItems : [],
    singleCryptoItem: []
}

const cryptoReducer = (state = cryptoState, action) => {
    switch (action.type) {
        case cryptoTypes.GET_ALL_CRYPTO:
            return{
                ...state,
                cryptoItems: action.payload
            };
        case cryptoTypes.GET_SINGLE_CRYPTO:
            return {
                ...state,
                singleCryptoItem: action.payload
            }
        default:
            return state
    }
}

export default cryptoReducer