import {cryptoTypes} from "./crypto.types";

export const getAllCrypto = item => ({
    type: cryptoTypes.GET_ALL_CRYPTO,
    payload: item
})


export const getSingleCrypto = item => ({
    type: cryptoTypes.GET_SINGLE_CRYPTO,
    payload: item
})
