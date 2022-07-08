import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Design in your budget" />
      
      <h1 className="headtexts__cormorant">Best Design Starts with</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Gold</p>
        <div className="app__specialMenu_menu_items">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>
            Product Name
          </p>
          <div className="app__menuitem-price">
            <p style={{ marginTop: '-30px' }} className="p__cormorant">
              Starts with
            </p>
          </div>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Diamond</p>
        <div className="app__specialMenu_menu_items">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
            Product Name
          </p>
          <div className="app__menuitem-price">
            <p style={{ marginTop: '-30px' }} className="p__cormorant">
              Starts with
            </p>
          </div>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a href="#gallery"><button type="button" className="custom__button">
        View More
      </button></a>
    </div>
  </div>
);

export default SpecialMenu;
