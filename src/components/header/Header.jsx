import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderButtonSvg } from '../../assets/svg/Svg';
import Button from '../../common/button/Button';
import Logo from './../../assets/img/pizza-logo.svg';

const Header = ({ order }) => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  // let totalPrice = 0;
  // order.forEach((el) => (totalPrice += Number.parseFloat(el.price)));

  // let totalCount = 0;
  // order.forEach((el) => (totalCount += Number.parseFloat(el.total)));

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>№One Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/busket">
            <Button className="button--cart">
              <span> {totalPrice} сом</span>
              <div className="button__delimiter"></div>
              <HeaderButtonSvg />
              <span> {totalCount} шт.</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
