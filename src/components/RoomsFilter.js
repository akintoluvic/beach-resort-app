import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter() {
    const context = useContext(RoomContext);
    const {
        rooms, handleChange, type, capacity, 
        price, minPrice, maxPRice, 
        minSize, maxSize, pets
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all', ...types]
    return (
        <section className="filter-container" >
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} 
                    className="form-control" onChange={handleChange}
                     >
                         {types.map((item, index) =>
                             <option value={item} key={index}>{item}</option>
                         )}
                     </select>
                </div>
                {/* end select type */}
            </form>
        </section>
    );
}
