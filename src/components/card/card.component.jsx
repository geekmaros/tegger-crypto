import React,{useState, useEffect} from "react";
import CardList from "../card-list/card-list.component";
import './card.styles.sass'
import axios  from 'axios'

const Cards = () => {
const  fetchCrypto = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        crossdomain: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    await axios.get('http://api.coincap.io/v2/assets', requestOptions)
        .then( res => {
            const data = res.data
            console.log(data)
        })




}
useEffect(() => {
    fetchCrypto()
})
    return (
        <div className='card-container'>
            <CardList/>
        </div>
    )
}

export default Cards