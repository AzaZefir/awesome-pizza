import React, { useState } from 'react';
import { pizzasData } from '../../data/Data';
import PizzaCard from '../content/pizzaCard/PizzaCard';
import Categories from './categories/Categories';
import SortPopup from './sortPopup/SortPopup';
import SliderReact from './../../common/slider/Slider';

const Content = ({ sliderCard, onAdd, order, setPizzas, pizzas }) => {
  const [category, setCategory] = useState(null);
  const [pizzasFilter, setPizzaFilter] = useState(pizzasData);
  const [sortType, setSortType] = useState({
    type: 'popular',
    order: 'desc',
  });

  // const sortedPizzas = useMemo(() => {
  //   console.log('vcvbnm');
  //   if (sortType) {
  //     return [...pizzas].sort((a, b) => a[sortType]?.localeCompare(b[sortType]))
  //   }
  //   return pizzas
  // }, [pizzas, sortType])

  const filterResult = (catItem) => {
    if (catItem === '') {
      setPizzaFilter(pizzasData);
      return;
    }
    const result = pizzasData.filter((curData) => {
      return curData.category === catItem;
    });
    setPizzaFilter(result);
  };

  const onSelectCategory = (index) => {
    setCategory(index);
  };

  const onSortPizzas = (type) => {
    console.log(type);
    setSortType(type);
    const sortedPizzas = pizzas.sort((a, b) => a[type.type]?.localeCompare(b[type.type]));
    setPizzas(sortedPizzas);
    console.log(sortedPizzas);
  };

  return (
    <div className="content">
      <div className="container">
        <SliderReact sliderCard={sliderCard} />
        <div className="content__top">
          <Categories
            filterResult={filterResult}
            onClickItem={onSelectCategory}
            category={category}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <SortPopup
            activeSortType={sortType.type}
            onSortPizzas={onSortPizzas}
            sortType={sortType}
            items={[
              { name: 'популярности', type: 'popular', order: 'desc' },
              { name: 'цене', type: 'price', order: 'desc' },
              { name: 'алфавит', type: 'name', order: 'asc' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzasFilter.map((pizza) => (
            <PizzaCard {...pizza} key={pizza.id} pizza={pizza} onAdd={onAdd} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
