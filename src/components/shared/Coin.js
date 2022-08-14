import React from 'react';

const Coin = ({data}) => {

    const {name, image, current_price, market_cap, symbol, price_change_percentage_24h} = data;

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>${current_price.toLocaleString()}</span>
            <span style={price_change_percentage_24h > 0 ? {color: 'green'} : {color: 'red'}}>
                {price_change_percentage_24h.toFixed(2)}%
            </span>
            <span>${market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;