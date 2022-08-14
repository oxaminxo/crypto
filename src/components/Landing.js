import React, { useEffect, useState } from 'react';

// Api
import { getData } from '../services/api';

// Component
import Coin from './shared/Coin';

const Landing = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const searchData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    useEffect(() => {

        const fetchAPI = async () => {
            const result = await getData();
            setData(result);
        }
        fetchAPI();

    }, []);

    return (
        <div style={{textAlign: 'center'}}>

            <input type='text' placeholder='Search' value={search} onChange={searchHandler} />
            
            {
                searchData.map(item => <Coin key={item.id} data={item} />)
            }
        </div>
    );
};

export default Landing;