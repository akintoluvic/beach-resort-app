import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />, 
                title: "Free Cocktails",
                info: "Lorem jdjd dkdd djis ejir ehwjw jrjr wjwje, dkdd djis ejir ehwjw jrjr wjwje ejej!"
            },{
                icon:<FaHiking />, 
                title: "Free Hiking",
                info: "Lorem jdjd dkdd djis ejir ehwjw jrjr wjwje, dkdd djis ejir ehwjw jrjr wjwje ejej!"
            },{
                icon:<FaShuttleVan />, 
                title: "free shuttle",
                info: "Lorem jdjd dkdd djis ejir ehwjw jrjr wjwje, dkdd djis ejir ehwjw jrjr wjwje ejej!"
            },{
                icon:<FaBeer />, 
                title: "free beer",
                info: "Lorem jdjd dkdd djis ejir ehwjw jrjr wjwje, dkdd djis ejir ehwjw jrjr wjwje ejej!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
