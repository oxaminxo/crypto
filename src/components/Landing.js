import React, { useEffect, useState } from 'react';

// Api
import { getData } from '../services/api';
import Coin from './shared/Coin';
const Landing = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            const result = await getData();
            setData(result);
        }
        fetchAPI();
    }, []);

    console.log(data);

    return (
        <div style={{textAlign: 'center'}}>
            <input type='text' placeholder='Search' />
            
            {
                data.map(item => <Coin key={item.id} data={item} />)
            }
        </div>
    );
};

export default Landing;