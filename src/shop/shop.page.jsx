import React, { Component } from 'react';
import CollectionPreview from '../collection/collection.preview';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: SHOP_DATA
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

export default ShopPage;