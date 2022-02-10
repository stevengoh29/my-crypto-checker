import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coin = ({rank, id, changes24h, icon, name, symbol, price, marketCap}) => {
    let navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`CoinDetails/${id}`)
    }
    
  return(
    <div className='row mb-3 align-items-center'>
        <div className='col-1'>
            #{rank}
        </div>
        <div className="col-3 coin-name">
            <img src={icon} className='me-3'/>
            {name}
        </div>
        <div className="col-1">
            {symbol}
        </div>
        <div className='col-2'>
            {price.toFixed(2)}
        </div>
        <div className='col-1'>
            <span className={`badge bg-${changes24h < 0 ? 'danger' : 'success'}`}>{changes24h.toFixed(2)}</span>
        </div>
        <div className='col-2'>
            {marketCap.toLocaleString('en')}
        </div>
        <div className='col-2 text-center'>
            <button className='btn btn-primary' onClick={() => handleClick(id)}>See Details</button>
        </div>
    </div>
  )
};

export default Coin;
