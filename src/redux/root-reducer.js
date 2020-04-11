import {combineReducers} from "redux";
import cryptoReducer from "./crypto/crypto.reducer";

export default combineReducers({
    crypto: cryptoReducer
})