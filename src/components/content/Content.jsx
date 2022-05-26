import React, { useState } from 'react';
import { pizzasData } from '../../data/Data';
import PizzaCard from '../content/pizzaCard/PizzaCard';
import Carousel from './carousel/Carousel';
import ContentTop from './contentTop/ContentTop';
import SortPopup from './sortPopup/SortPopup';

const Content = ({ sliderCard }) => {
  const [category, setCategory] = useState(null);

  const [pizzasFilter, setPizzaFilter] = useState(pizzasData);

  const filterResult = (catItem) => {
    if (catItem === '') {
      setPizzaFilter(pizzasData)
      return
    }
    const result = pizzasData.filter((curData) => {
      return curData.category === catItem;
    });
    setPizzaFilter(result);
  };

  const onSelectCategory = (index) => {
    setCategory(index);

  };

  return (
    <div className="content">
      <div className="container">
        <Carousel sliderCard={sliderCard} />
        <div className="content__top">
          <ContentTop
            filterResult={filterResult}
            onClickItem={onSelectCategory}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <SortPopup
            items={[
              { name: 'Популярности', type: 'popular' },
              { name: 'Цене', type: 'price' },
              { name: 'Алфавиту', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzasFilter.map((pizza) => (
            <PizzaCard {...pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
