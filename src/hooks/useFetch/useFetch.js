import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    return {error, data, loading};
}

export default useFetch;