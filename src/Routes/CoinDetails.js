import axios from 'axios';
import {React, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/CoinDetails.css';

const CoinDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [coin, setCoin] = useState([]);
    const getCoinDetails = (id) => {
        axios.get(`https://api.coinstats.app/public/v1/coins/${id}`)
        .then((response) => {
            console.log(response.data.coin);
            setCoin(response.data.coin)
        })
    }
    useEffect(() => {
        getCoinDetails(id)
    }, [])
    const handleClick = () => {
        navigate('/');
    }
    return(
        <div className='bg-custom d-flex' id='coin-details'>
            <div className='glassmorphism p-2 main-content w-75 m-auto text-dark'>
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={coin.icon} className='mb-2'/>
                        <p className='mb-0'>{coin.name} ({coin.symbol})</p>
                    </div>
                </div>
                <hr />
                <div className="row coin-info">
                    <div className="col-4">
                        <div className="row">
                            <p>Rank</p>
                            <h5>{coin.rank}</h5>
                        </div>
                        <div className="row">
                            <p>Price</p>
                            <h5>{coin.price}</h5>
                        </div>
                        <div className="row">
                            <p>Price in BTC</p>
                            <h5>{coin.priceBtc}</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <p>Market Cap</p>
                            <h5>{coin.marketCap}</h5>
                        </div>
                        <div className="row">
                            <p>Total Supply</p>
                            <h5>{coin.totalSupply}</h5>
                        </div>
                        <div className="row">
                            <p>Volume</p>
                            <h5>{coin.volume}</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <p>Price Changes in 1h</p>
                            <h5>{coin.priceChange1h}%</h5>
                        </div>
                        <div className="row">
                            <p>Price Changes in 24h</p>
                            <h5>{coin.priceChange1d}%</h5>
                        </div>
                        <div className="row">
                            <p>Price Changes in 1w</p>
                            <h5>{coin.priceChange1w}%</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <button className='btn btn-danger' onClick={handleClick}>Return</button>
            </div>
        </div>
    )
};

export default CoinDetails;
