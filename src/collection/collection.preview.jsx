import React from 'react';
import './collection.preview.scss';
import CollectionItem from './collection.item';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{ title.toUpperCase() }</h1>

        <div className="preview">
            {
                items
                .filter((item, index) => (index < 4))
                .map((item) => (
                    <CollectionItem key={ item.id } item={ item } />
                ))
                /*
                .map(({ id, ...otherItems }) => (
                    <CollectionItem key={ id }{ ...otherItems } />
                ))
                */
            }
        </div>
    </div>
);

export default CollectionPreview;