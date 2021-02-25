import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection/collection.preview';
import { selectCollections } from '../utils/redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
    <div className="shop-page">
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

export default connect(mapStateToProps)(ShopPage);