import { useEffect, useState } from 'react'
import ResultList from '../components/results/ResultList';

const SearchResults = ( {searchQuery} ) => {
    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        const getResults = async() => {
            const apiResults = await fetchResults();
            setApiResults(apiResults);
        }

        getResults();
    }, [searchQuery])

    const fetchResults = async() => {
        const res = await fetch("http://localhost:5000/suggestions");
        const data = await res.json();
        return data;
    }

    return (
        <div>
            <ResultList results={apiResults} />
        </div>
    )
}

export default SearchResults
