import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Home.css'
import Coin from '../Components/Coin';

const TableHeader = ({width, text}) => {
    return(
        <div className={`col-${width}`}>
            {text}
        </div>
    )
}

const Home = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterKeys, setFilterKeys] = useState("");

    const filteredCoinsData = 
        coinsData.filter((coin) => {
            return coin.name.toLowerCase().includes(filterKeys)
        })
    
    useEffect(() => {
      getCoinsData();
    }, []);
    

    const getCoinsData = () => {
        setIsLoading(true)
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD')
        .then((response) => {
            console.log(response.data.coins);
            setCoinsData(response.data.coins);
            setIsLoading(false)
        })
    }

    return(
        <div className='w-75 mx-auto py-3'>
            <div className='text-center'>
                <h2>Welcome to Crypto Price App!</h2>
                <p>Take a look at the top 100 coins!</p>
            </div>
            {isLoading && <h1>Loading the data</h1>}
            <input type="text" name="filter" id="filter" placeholder="Search Coin's Name" className='w-100 p-2' onChange={(e) => setFilterKeys(e.target.value)}/>
            <hr/>
            <div className="row text-center">
                <TableHeader width={1} text={'#'}/>
                <TableHeader width={3} text={'Name'}/>
                <TableHeader width={1} text={'Symbol'}/>
                <TableHeader width={2} text={'Price ($)'}/>
                <TableHeader width={1} text={'24 %'}/>
                <TableHeader width={2} text={'Market Cap ($)'}/>
                <TableHeader width={2} text={'Action'}/>
            </div>
            <hr />
            {filteredCoinsData.map((coin) => {
                return(
                    <Coin id={coin.id} rank={coin.rank} changes24h={coin.priceChange1d} icon={coin.icon} name={coin.name} symbol={coin.symbol} price={coin.price} marketCap={coin.marketCap} key={coin.id}/>
                )
            })}
        </div>
    )
};

export default Home;
