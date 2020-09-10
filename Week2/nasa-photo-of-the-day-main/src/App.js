import React, { useState, useEffect } from 'react';
import Title from './components/title/Title';
import Image from './components/image/Image';
import Description from './components/description/Description';
import './App.css';
import axios from 'axios';

function App() {
    // https://api.nasa.gov/planetary/apod?api_key=N7fh9I7bXaJ9a4yC0vHaTPGXrsUnPrMXCfcBZ3hb
    // https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY
    const [fetchData, setFetchData] = useState({});
    // const [hasError, setHasError] = useState(false);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        function getPic() {
            axios
                .get(
                    'https://api.nasa.gov/planetary/apod?api_key=N7fh9I7bXaJ9a4yC0vHaTPGXrsUnPrMXCfcBZ3hb&date=2019-08-08'
                )
                .then((res) => {
                    setFetchData(res.data);
                })
                .catch((err) => {
                    console.log('err', err);
                });
        }
        getPic();
    }, []);

    console.log('fetchData', fetchData);

    return (
        <div>
            <Title fetchData={fetchData} />
            <Image fetchData={fetchData} />
            <Description fetchData={fetchData} />
        </div>
    );
}

export default App;
