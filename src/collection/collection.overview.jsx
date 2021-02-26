import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection.overview.scss';
import CollectionPreview from './collection.preview';
import { selectCollectionsForPreview } from '../utils/redux/shop/shop.selectors';

const CollectionOverView = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollections}) => (
                    <CollectionPreview key={ id }{ ...otherCollections } />
                )
            )
        }
    </div>  
);

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverView);