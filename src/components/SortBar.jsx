import React from 'react';

export default function SortBar({ sortBots }) {
    const handleSort = (criteria) => {
        sortBots(criteria);
    };

    return (
        <div>
            <p>Sort By:</p>
            <button className='Sortbutton' onClick={() => handleSort('health')}>Health</button>
            <button className='Sortbutton' onClick={() => handleSort('damage')}>Damage</button>
            <button className='Sortbutton' onClick={() => handleSort('armor')}>Armor</button>
        </div>
    );
}