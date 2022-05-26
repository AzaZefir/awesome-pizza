import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderButtonSvg } from '../../assets/svg/Svg';
import Button from '../../common/Button';
import Logo from './../../assets/img/pizza-logo.svg';

const Header = () => {
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
              <span>520 сом</span>
              <div className="button__delimiter"></div>
              <HeaderButtonSvg/>
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
