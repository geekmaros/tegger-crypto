import {cryptoTypes} from "./crypto.types";

const cryptoState = {
    crypto : []
}

const cryptoReducer = (state = cryptoState, action) => {
    switch (action.type) {
        case cryptoTypes.GET_ALL_CRYPTO:
            return{
                ...state,
                crypto: action.payload
            };
        case cryptoTypes.GET_SINGLE_CRYPTO:
            return {
                ...state,
                crypto: action.payload
            }
        default:
            return state
    }
}

export default cryptoReducer