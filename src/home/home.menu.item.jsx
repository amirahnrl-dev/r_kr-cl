import React from 'react';
import { withRouter } from 'react-router-dom';
import './home.menu.item.scss';

const HomeMenuItem = ({ title, imageUrl, size, history, path, match }) => (
    <div 
        className={ `${ size } menu-item` }
        onClick={ () => history.push(`${ match.url }${ path }`) }
    >
        <div 
            className='background-image'
            style={{ backgroundImage: `url(${ imageUrl })` }}
        />
        <div className="text-box">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(HomeMenuItem);