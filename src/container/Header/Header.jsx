import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div >
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info"style={{marginTop:'50px'}}>
        <SubHeading title="Chase the new design" />
        <h1 className="app__header-h1">The Key To Fine Design</h1>
        <p className="p__opensanss" style={{ margin: '2rem 0',color:'white !important' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
          quam scelerisque sapien. Et, penatibus aliquam amet tellus{' '}
        </p>
        <a href="#menu"><button type="button" className="custom__button">
          Explore Menu
        </button></a>
      </div>

      <div className="app__wrapper_img"style={{marginTop:'50px'}}>
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  </div>
);

export default Header;
