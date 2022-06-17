import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BackButtonSvg, ClearBusketSvg, HeaderButtonSvg } from '../../assets/svg/Svg';
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../../store/actions/CardActions';
import BusketEmpty from './busketEmpty/BusketEmpty';
import CartItem from './cartItem.jsx/CartItem';

const Busket = () => {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
 
  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', items);
  };

  return (
    <div className="content">
      {totalCount ? (
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <HeaderButtonSvg />
                Корзина
              </h2>
              <div className="cart__clear" onClick={onClearCart}>
                <ClearBusketSvg />
                <span>Очистить корзину</span>
              </div>
            </div>
            {addedPizzas.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                imageUrl={obj.imageUrl}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
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
                <div className="button pay-btn" onClick={onClickOrder}>
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
