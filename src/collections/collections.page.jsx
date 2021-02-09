import React, { Component } from 'react';
import CollectionPreview from '../collection/collection.preview';
import COLLECTIONS_DATA from './collections.data';

class CollectionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: COLLECTIONS_DATA
        }
    }

    render() {
        const { items } = this.state;
        return (
            <div className="collections-page">
                {
                    items.map(({ id, ...otherItems }) => (
                        <CollectionPreview key={ id }{ ...otherItems } />
                    ))
                }
            </div>
        );
    }
}

export default CollectionsPage;