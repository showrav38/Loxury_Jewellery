import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
      
        <p className="p__cormorant" style={{ color: '#DCCA87',marginTop:'20px' }}>{title}</p>
      </div>
      
      <div style={{marginTop:'20px'}}  className="app__menuitem-dash" />
      
      <div className="app__menuitem-price">
      
        <p style={{marginTop:'20px'}} className="p__cormorant">{price}</p>
      </div>
    </div>

    {/* <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div> */}
  </div>
);

export default MenuItem;
