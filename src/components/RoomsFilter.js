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
        price, minPrice, maxPrice, 
        minSize, maxSize, pets
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all', ...types]
    types = types.map((item, index) =>
        <option value={item} key={index}>{item}</option>
    );
    // get room capacity
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) =>
        <option value={item} key={index}>{item}</option>
    );
    // // get room capacity
    // let people = getUnique(rooms, 'capacity');
    // people = people.map((item, index) =>
    //     <option value={item} key={index}>{item}</option>
    // );
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
                         {types}
                     </select>
                </div>
                {/* end select type */}
                {/* room capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={type} 
                    className="form-control" onChange={handleChange}
                     >
                         {people}
                     </select>
                </div>
                {/* end room capacity */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} 
                        id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end room price */}
                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="price" min={minSize} max={maxSize} 
                        id="size" value={minSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end room size */}
            </form>
        </section>
    );
}
