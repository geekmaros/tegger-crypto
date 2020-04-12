import React, {useState,useEffect} from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { getSingleCrypto} from "../../redux/crypto/crypto.action";
import './card-details.style.sass'
import axios from "axios";


const CardDetails = ({history, match, getCrypto, singleCrypto}) => {
    const {id} = match.params
     const [data, setData] = useState()

    const  fetchCrypto = async () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            crossdomain: true,
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        await axios.get(`https://api.coincap.io/v2/assets/${id}`, requestOptions)
            .then( res => {
                const result = res.data.data
                setData(result)
                console.log(result)
                getCrypto(result)

            })
    }


    useEffect(() => {
        fetchCrypto()
       }, [])

    return (
        <div>Card Detail {id}</div>

    )
}

const mapStateToProps = ({crypto}) => ({
    singleCrypto: crypto.singleCryptoItem
})
const mapDispatchToProps = dispatch => ({
    getCrypto: items => dispatch(getSingleCrypto(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetails))