import React,{useState, useEffect} from "react";
import {connect} from 'react-redux'
import {getAllCrypto} from "../../redux/crypto/crypto.action";
import CardList from "../card-list/card-list.component";
import './card.styles.sass'
import axios  from 'axios'


const Cards = ({getCrypto, allCryptoItems}) => {
    const [resources, setResources] = useState([])
    const  fetchCrypto = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        crossdomain: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    await axios.get('https://api.coincap.io/v2/assets?limit=9', requestOptions)
        .then( res => {
            const data = res.data.data
            setResources(data)
            getCrypto(resources)

        })
}
useEffect(() => {
    console.log(resources)
    fetchCrypto()

}, [resources])
    return (
        <div className='card-container'>
            {
                allCryptoItems.map( cryptoItem => <CardList key={cryptoItem.id} items={cryptoItem}/> )
            }

        </div>
    )
}
const mapStateToProps = ({crypto}) => ({
   allCryptoItems: crypto.cryptoItems
})
const mapDispatchToProps = dispatch => ({
    getCrypto: items => dispatch(getAllCrypto(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cards)