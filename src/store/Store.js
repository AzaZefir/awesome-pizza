import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import CardReducer from './reducers/CardReducer';
import pizzas from './reducers/PizzasReducer';
import filters from './reducers/FilterReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  pizzas: pizzas,
  filters: filters,
  cart: CardReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,composeEnhancers(applyMiddleware(thunk)),
  
);

// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default store;
