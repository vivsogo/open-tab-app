import React from 'react'
export const DrinkFilter = ({handleSearch}) => {

    return (
        <div>
            <input type="text" placeholder="Type a Drink name..." 
            onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}

