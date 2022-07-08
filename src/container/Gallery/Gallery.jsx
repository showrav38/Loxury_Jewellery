import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
/* import {MenuItem } from '../../components'; */
import { data} from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
 /*  {data.gal.map((gals,index)=>(
    console.log(gals,index)
  ))
  } */

  const scroll = direction => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtexts__cormorant">Photo Gallery</h1>
        <p className="p__opensanss" style={{ marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit
          elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {/* {data.gal.map(
            (galr) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
               
                  <img src={galr.imgUrl} alt="gallery_image" />
                  <a href={galr.url}><BsInstagram className="gallery__image-icon" /></a>
                
              </div>
            )
            
          )} */}
          
           {data.gal.map((gals, index) => (
           <div
           className="app__gallery-images_card flex__center"
           key={`gallery_image-${index + 1}`}
         >
          
             <img src={gals.imgUrl} alt="gallery_image" />
             <a href={gals.url}><BsInstagram className="gallery__image-icon" /></a>
           
         </div>
            
          ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
