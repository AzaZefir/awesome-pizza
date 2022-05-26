import React, { useState } from 'react';
import cn from 'classnames';
import { CardAddPlusSvg } from '../../../assets/svg/Svg';
const PizzaCard = ({ name, types, price, sizes, imageUrl }) => {
  const availableNames = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeTypes, setActiveTypes] = useState(types[0]);
  const [activeSizes, setActiveSizes] = useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveTypes(index);
  };
  const onSelectSize = (index) => {
    setActiveSizes(index)
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableNames.map((type, index) => (
            <li
              key={index}
              onClick={() => onSelectType(index)}
              className={cn({
                active: activeTypes === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
        {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={cn({
                active: activeSizes === index,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} сом</div>
        <div className="button button--outline button--add">
          <CardAddPlusSvg/>
          <span>Добавить</span>
          <i>1</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
