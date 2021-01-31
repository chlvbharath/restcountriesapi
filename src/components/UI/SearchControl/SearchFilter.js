import React from 'react';

import classes from './SearchFilter.module.css';

const SearchFilter = (props) => {
    let searchFilter = <input 
    onChange={props.changed}
    placeholder='type here to filter' />
    return (
        <div>
            {searchFilter}
        </div>
    );
}

export default SearchFilter;