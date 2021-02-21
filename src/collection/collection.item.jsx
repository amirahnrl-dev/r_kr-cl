import React from 'react';
import './collection.item.scss';
import Button from '../utils/button/button';
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div 
                className="image" 
                style={{ backgroundImage: `url(${ imageUrl })` }}
            />

            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>

            <Button 
                onClick={ () => addItem(item) }
                inverted
            >Add to cart</Button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);