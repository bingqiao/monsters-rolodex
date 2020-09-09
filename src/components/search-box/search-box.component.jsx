import React from 'react';
import './search-box.styles.css'

// functional component has no states, lifecycle methods
export const SearchBox = ({ placeholder, searchHandler}) =>  (
    <input 
        className='search' 
        type='search' 
        placeholder= {placeholder} 
        onChange={e => searchHandler(e.target.value)}
    />
);