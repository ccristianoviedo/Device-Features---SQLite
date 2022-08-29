import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/breads.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';
import placeReducer from './reducers/place.reducer';

const rootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    order: OrderReducer,
    places:placeReducer,
})
export default createStore(rootReducer, applyMiddleware(thunk));