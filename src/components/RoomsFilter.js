import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'


export default function RoomsFilter() {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, 
        price, minPrice, maxPRice, 
        minSize, maxSize, pets
    } = context;
    return (
        <section className="filter-container" >
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} 
                    className="form-control" onChange={handleChange} ></select>
                </div>
                {/* end select type */}
            </form>
        </section>
    );
}
