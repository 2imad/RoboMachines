import React from 'react'

const SearchBox = ({searchChange , searchField }) => {
    return (
        <div className="p2">
            <input
                className="pa3 ba b--green bg-lightest-blue ma4 "
                type="search" 
                placeholder="Search for Robots" 
                onChange = { searchChange }
                
                />
        </div>
    )
}


export default SearchBox