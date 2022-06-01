import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BackButtonSvg,
  ButtonCircleSvg,
  ClearBusketSvg,
  HeaderButtonSvg,
  MinusSvg,
  PlusSvg,
} from '../../assets/svg/Svg';
import BusketEmpty from './busketEmpty/BusketEmpty';

const Busket = ({ order, onAdd, onRemove }) => {
  let totalPrice = 0;
  order.forEach((el) => (totalPrice += Number.parseFloat(el.price)));

  let totalCount = 0;
  order.forEach((el) => (totalCount += Number.parseFloat(el.total)));

  const onPay = (items) => {
    alert('Вы сделали заказ', items)
  }

  return (
    <div className="content">
      {order.length !== 0 ? (
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <HeaderButtonSvg />
                Корзина
              </h2>
              <div className="cart__clear" onClick={onRemove}>
                <ClearBusketSvg />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {order.map((pizzaInBusket) => (
                <div className="cart__item" key={pizzaInBusket.id}>
                  <div className="cart__item-img">
                    <img className="pizza-block__image" src={pizzaInBusket.imageUrl} alt="Pizza" />
                  </div>
                  <div className="cart__item-info">
                    <h3>{pizzaInBusket.name}</h3>
                    <p>{pizzaInBusket.size}</p>
                  </div>
                  <div className="cart__item-count">
                    <div
                      className="button button--outline button--circle cart__item-count-minus"
                      onClick={() => onRemove(pizzaInBusket)}>
                      <MinusSvg />
                    </div>
                    <b>{pizzaInBusket.total}</b>
                    <div
                      className="button button--outline button--circle cart__item-count-plus"
                      onClick={() => onAdd(pizzaInBusket)}>
                      <PlusSvg />
                    </div>
                  </div>
                  <div className="cart__item-price">
                    <b>{pizzaInBusket.price}</b>
                  </div>
                  <div className="cart__item-remove" onClick={() => onRemove(pizzaInBusket)}>
                    <div className="button button--outline button--circle">
                      <ButtonCircleSvg />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  {' '}
                  Всего пицц: <b>{totalCount} шт.</b>{' '}
                </span>
                <span>
                  {' '}
                  Сумма заказа: <b>{totalPrice} сом</b>{' '}
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <NavLink to="/" className="button button--outline button--add go-back-btn">
                  <BackButtonSvg />
                  <span>Вернуться назад</span>
                </NavLink>
                <div className="button pay-btn" onClick={onPay}>
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BusketEmpty />
      )}
    </div>
  );
};

export default Busket;
