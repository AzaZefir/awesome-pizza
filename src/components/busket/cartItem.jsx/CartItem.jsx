import React from 'react';
import { ButtonCircleSvg, MinusSvg, PlusSvg } from '../../../assets/svg/Svg';

const CartItem = ({
  id,
  name,
  type,
  size,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
  imageUrl,
}) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };
  return (
    <div className="content__items">
      <div className="cart__item" key={id}>
        <div className="cart__item-img">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>
            {' '}
            {type} тесто, {size} см.
          </p>
        </div>
        <div className="cart__item-count">
          <div
            className="button button--outline button--circle cart__item-count-minus"
            onClick={handleMinusItem}>
            <MinusSvg />
          </div>
          <b>{totalCount}</b>
          <div
            className="button button--outline button--circle cart__item-count-plus"
            onClick={handlePlusItem}>
            <PlusSvg />
          </div>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice}</b>
        </div>
        <div className="cart__item-remove" onClick={handleRemoveClick}>
          <div className="button button--outline button--circle">
            <ButtonCircleSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
