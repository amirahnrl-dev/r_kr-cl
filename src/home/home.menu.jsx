import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './home.menu.scss';
import HomeMenuItem from './home.menu.item';
import { selectMenuCollections } from '../utils/redux/menu/menu.selectors';

const HomeMenu = ({ collections }) => (
    <div className="home-menu">
        {
            collections.map(
                ({ id, ...otherColletions }) => (
                    <HomeMenuItem key={ id }{ ...otherColletions } />
                )
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections: selectMenuCollections
});

export default connect(mapStateToProps)(HomeMenu);