import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};
