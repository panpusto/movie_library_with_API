import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    const routes = {
        '/watched': 'Watched',
        '/watchlist': 'Watchlist'
    };

    const getRoutes = () => {
        let results = [];
        for (let [pathName, description] of Object.entries(routes)) {
            results.push(
                <li key={pathName} className='nav-item'>
                    <Link
                        className='nav-link sr-only'
                        to={pathName}
                    >
                    {description}
                    </Link>
                </li>
            )
        }
        return results
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Movie Library</Link>
            <div className='collapse navbar-collapse'>
                <form className="d-flex">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button 
                            className="btn btn-outline-success my-2 my-sm-0" 
                            type="submit"
                        >
                            Search
                        </button>
                </form>
                <ul className='navbar-nav'>
                    {getRoutes()}
                </ul>
            </div>            
        </nav>
    );
};

export default Search;