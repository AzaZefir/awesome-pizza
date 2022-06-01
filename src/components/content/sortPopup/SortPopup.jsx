import React, { useEffect, useRef, useState } from 'react';
import { SortLabelSvg } from '../../../assets/svg/Svg';

// const SortPopup = ({ items, value, onChange,sortedPizzas,activeSortType }) => {
const SortPopup = React.memo(function SortPopup({ items, activeSortType, onSortPizzas }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  // const [activeItem, setActiveItem] = useState(0);
  //! Добавлено
  const sortRef = useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  // const activeLabel = items[activeItem].name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (index) => {
    if (onSortPizzas) {
      onSortPizzas(index);
    }
    // setActiveItem(index);
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <SortLabelSvg visiblePopup={visiblePopup} />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeSortType === obj.type ? 'active' : ''}
                  onClick={() => onSelectItem(obj)}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;

/* <select
            value={value}
            onChange={(e)=> onChange(e.target.value)}
          >
            {items.map((item, index) => (
              <option
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}
                value={item.value}>
                {item.name}
              </option>
            ))}
          </select> 
          */
