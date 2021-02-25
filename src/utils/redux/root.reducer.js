import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuReducer from './menu/menu.reducer';
import shopReducer from './shop/shop.reducer';

// default
const persistConfig = {
    key: 'root',    // start from root
    storage,        //use local storage as default storage
    whitelist: ['cart']
}

// modified
const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);