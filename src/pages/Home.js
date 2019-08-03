import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'

import PropTypes from 'prop-types'

const Home = () => {
    return ( 
        <>
        <Hero  >
            <Banner title="Luxurious Rooms" 
                subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
     );
}
 
export default Home;