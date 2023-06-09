import React from 'react';


const Search = ({SearchChange}) => 
{
    return(
        <div className='pa2'>
            <input type='text' placeholder='Search'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={SearchChange}></input>
        </div>
 
    );
}

export default Search;