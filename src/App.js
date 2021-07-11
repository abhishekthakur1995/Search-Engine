import { useState } from 'react';
import Layout from "./components/layouts/Layout";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./pages/SearchResults";

const App = () => {
    const[searchQuery, setSearchQuery] = useState();

    const submitHandler = (searchQuery) => {
        if(searchQuery !== '') setSearchQuery(searchQuery);
    }

    return (
        <div className="App">
            <Layout>
                <SearchBar onSubmit={submitHandler} />
                {searchQuery && <SearchResults searchQuery={searchQuery}/>}
            </Layout>
        </div>
    );
}

export default App;
