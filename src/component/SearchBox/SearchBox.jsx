import React from 'react';

const SearchBox = ({ searchedValues, setSearchedValues }) => {
    const changeSearchVal = (event) => setSearchedValues(event.target.value)

    return (
        <div>
            <input
                style={{ padding: '10px' }}
                type='text'
                placeholder='Search by notes title...'
                value={searchedValues}
                onChange={changeSearchVal}
            />
        </div>
    );
};

export default SearchBox;
