import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection.overview.scss';
import CollectionPreview from './collection.preview';
import { selectCollections } from '../utils/redux/shop/shop.selectors';

const CollectionPage = ({ collections }) => (
    <div className="collection-page">
        {
            collections.map(({id, ...otherCollections}) => (
                    <CollectionPreview key={ id }{ ...otherCollections } />
                )
            )
        }
    </div>  
);

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionPage);