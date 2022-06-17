import React, { useState } from 'react';
import cn from 'classnames';
import { CardAddPlusSvg } from '../../../assets/svg/Svg';

const PizzaCard = ({
  id,
  name,
  types,
  price,
  sizes,
  imageUrl,
  onClickAddPizza,
  addedCount,
}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeTypes, setActiveTypes] = useState(types[0]);
  const [activeSizes, setActiveSizes] = useState(0);

  const onSelectType = (index) => {
    setActiveTypes(index);
    console.log(index);
  };
  const onSelectSize = (index) => {
    setActiveSizes(index);
  };
  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSizes],
      type: availableTypes[activeTypes],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
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
      <div onClick={onAddPizza} className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} сом</div>
        <div className="button button--outline button--add">
          <CardAddPlusSvg />
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
