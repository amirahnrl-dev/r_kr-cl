import React from 'react';
import { conenct, connect } from 'react-redux';
import './collection.page.scss';
import CollectionItem from './collection.item';
import { selectCollection } from '../utils/redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => (
    <div className="collection-page">
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);