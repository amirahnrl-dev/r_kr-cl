import React from "react";
import './home.menu.item.scss';

const HomeMenuItem = ({ title, imageUrl, size }) => (
    <div className={ `${ size } menu-item` }>
        <div 
            className='background-image'
            style={{ backgroundImage: `url(${ imageUrl })` }}
        />
        <div className="text-box">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default HomeMenuItem;