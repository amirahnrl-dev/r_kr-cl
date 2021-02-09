import React, { Component } from "react";
import './home.menu.scss';
import HomeMenuItem from './home.menu.item';

class HomeMenu extends Component {
    constructor() {
        super();

        this.state = {
            collections: [
                {
                    title: "hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1,
                    path: "hats"
                },
                {
                    title: "jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2,
                    path: "jackets"
                },
                {
                    title: "sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                    path: "sneakers"
                },
                {
                    title: "womens",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: "large",
                    id: 4,
                    path: "womens"
                },
                {
                    title: "mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: "large",
                    id: 5,
                    path: "mens"
                }
            ]
        }
    }

    render() {
        return (
            <div className="home-menu">
                {
                    this.state.collections.map(
                        ({ id, ...otherColletions }) => (
                            <HomeMenuItem key={ id }{ ...otherColletions } />
                        )
                    )

                    /*
                    this.state.collections.map(
                        ({ title, imageUrl, id, size, path }) => (
                        <HomeMenuItem 
                            key={ id } 
                            title={ title.toUpperCase() } 
                            imageUrl={ imageUrl } 
                            size={ size }
                            path={ path }
                        />)
                    )
                    */
                }
            </div>
        );
    }
}

export default HomeMenu;