import React, { useEffect, useState } from 'react';

// Api
import { getData } from '../services/api';

// Component
import Coin from './shared/Coin';

// Styles
import styles from "./Landing.module.css";

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

            <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchHandler} />
            
            {
                data.length ?
                <div className={styles.coinContainer}>
                    {
                        searchData.map(item => <Coin key={item.id} data={item} />)
                    }
                </div> :
                <h1>Loading...</h1>
            }
        </div>
    );
};

export default Landing;