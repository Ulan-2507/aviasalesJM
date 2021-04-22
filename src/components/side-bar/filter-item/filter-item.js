import React from 'react';

function FilterItem({value, show, handler}) {
    return (
        <li className="filter__item selected-item" >
            <label className="check">
                <input 
                    className="check__input" 
                    type="checkbox" 
                    onChange={handler}
                    checked={show}
                />
                <span className="check__box"></span>
                {value}
            </label>
        </li>
    );
}

export default FilterItem;