import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovingNames = () => {
    const [names, setNames] = useState([]);

    const getNames = async () => {
        try {
            let response = await fetch("https://api.aladhan.com/v1/asmaAlHusna");
            if (response.ok) {
                let data = await response.json();
                setNames(data.data);
            } else {
                console.log("Error in API response:", response.status);
            }
        } catch (error) {
            console.log("Error in Data Loading", error);
        }
    };

    useEffect(() => {
        getNames();
    }, []);


    return (
        <Link to='/names'>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8">
                99 Names Of Allah Almighty
            </h1>
            <marquee >
                {names.map((name, index) => (
                    <div
                        className='rounded'
                        key={index}
                        style={{ display: 'inline-block', margin: '0 10px', border: '1px solid black', padding: '10px', }}>
                        <h1 className='text-xl' >{name.name.toUpperCase()}</h1>
                    </div>
                ))}
            </marquee>
        </Link>
    );
};

export default MovingNames;
