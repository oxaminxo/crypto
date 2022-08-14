import React, { useEffect, useState } from 'react';

// Api
import { getData } from '../services/api';
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
                data.map(item => <h3 key={item.id}>{item.name}</h3>)
            }
        </div>
    );
};

export default Landing;