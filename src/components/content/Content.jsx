// import React, { useState } from 'react';
// import { pizzasData } from '../../data/Data';
import PizzaCard from '../content/pizzaCard/PizzaCard';
import Categories from './categories/Categories';
import SortPopup from './sortPopup/SortPopup';
import SliderReact from './../../common/slider/Slider';
import LoadingSkeleton from '../../common/loaderSkeleton/LoaderSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas, setPizzas } from '../../store/actions/PizzasAction';
import { useCallback, useEffect, useState } from 'react';
import { setCategory, setSortBy } from '../../store/actions/filtersAction';

const Content = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  // const [category, setCategory] = useState(null);
  // const [pizzasFilter, setPizzaFilter] = useState(items);
  // const [sortType, setSortType] = useState({
  //   type: 'rating',
  //   order: 'desc',
  // });

  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchPizzas(sortBy, category));
  // }, [category, dispatch, sortBy]);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  // const filterResult = (catItem) => {
  //   if (catItem === '') {
  //     setPizzaFilter(items);
  //     return;
  //   }
  //   const result = items.filter((curData) => {
  //     return curData.category === catItem;
  //   });
  //   setPizzaFilter(result);
  // };

  // const onSelectCategory = (index) => {
  //   setCategory(index);
  // };

  // const onSortPizzas = (type) => {
  //   setSortType(type);
  //   const sortedPizzas = pizzasFilter.sort((a, b) => a[type.type]?.localeCompare(b[type.type]));
  //   setPizzas(sortedPizzas);
  // };

  return (
    <div className="content">
      <div className="container">
        <SliderReact />
        <div className="content__top">
          <Categories
            // filterResult={filterResult}
            onClickItem={onSelectCategory}
            category={category}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <SortPopup
            activeSortType={sortBy.type}
            onSortPizzas={onSelectSortType}
            items={[
              { name: 'популярности', type: 'popular', order: 'desc' },
              { name: 'цене', type: 'price', order: 'desc' },
              { name: 'алфавит', type: 'name', order: 'asc' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
                <PizzaCard
                  onClickAddPizza={handleAddPizzaToCart}
                  key={obj.id}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                  {...obj}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <LoadingSkeleton key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Content;
