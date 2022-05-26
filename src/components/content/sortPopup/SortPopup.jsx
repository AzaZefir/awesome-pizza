import React, { useState } from 'react';
import { SortLabelSvg } from '../../../assets/svg/Svg';

const SortPopup = ({items}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const activeLabel =items[activeItem].name

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false)
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <SortLabelSvg visiblePopup={visiblePopup}/>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
          {items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}>
            {item.name}
          </li>
        ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
