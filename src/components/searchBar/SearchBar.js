import { useRef } from 'react';

const SearchBar = ({ onSubmit }) => {

    const searchQueryInputRef = useRef();

    const submitHandler = (ev) => {
        ev.preventDefault();
        
        const searchQuery = searchQueryInputRef.current.value;
        onSubmit(searchQuery)
    }

    return (
        <div className="search-form">
            <form onSubmit={submitHandler}>
                <div className="input-group">
                    <input type="text" ref={searchQueryInputRef} placeholder="Enter Keyword" name="search" className="form-control input-lg" />
                    <div className="input-group-btn">
                        <button className="btn btn-lg btn-primary" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
