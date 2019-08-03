import React, { Component } from 'react';
import { RoomContext } from "../Context";
import Room from "./Room";
import Title from "./Title"
import Loading from "./Loading";


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { featuredRooms: rooms } = this.context;
        console.log(rooms);
        return (
            <div>
                 from FeaturedRooms
                 <Loading />
            </div>
        )
    }
}
