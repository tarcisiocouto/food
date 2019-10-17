import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there');
        try{
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong');
        }
    };

    // o segundo argumento, o array vazio [] indica que o código 
    // dentro do useEffect só deverá ser executado uma única vez
    useEffect(() => {
        searchApi('pasta');
    }, []); 

    return [searchApi, results, errorMessage];
};