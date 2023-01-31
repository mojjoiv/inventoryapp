import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

// Reducer for storing products
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'SET_PRODUCTS':
      return action.products;
    default:
      return state;
  }
};

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  products: productsReducer,
});

// Middleware for handling async actions
const middleware = [thunk.withExtraArgument(AsyncStorage)];

// Create the store with the root reducer and middleware
const configureStore = () => createStore(rootReducer, applyMiddleware(...middleware));

export default configureStore;
