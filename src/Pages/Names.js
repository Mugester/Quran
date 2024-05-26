import React, { useEffect, useState } from 'react';

const Names = () => {
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
        <>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center pt-24 text-gray-900 mb-8">
                99 Names Of Allah Almighty
            </h1>

            <div className="flex flex-wrap justify-center py-8">
        {names.map((name, index) => (
          <div className="S-card mx-5 my-5" key={name.id}>
            <div className="first-content">
            {name.name.toUpperCase()}
            </div>
            <div className="second-content text-center">
            {name.en.meaning}
            </div>
          </div>
        ))}
      </div>
        </>
    );
};

export default Names;
