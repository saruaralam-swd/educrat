import React from 'react';
import img1 from '../../assets/img/gallery/1.png'
import img2 from '../../assets/img/gallery/2.png'
import img3 from '../../assets/img/gallery/3.png'
import img4 from '../../assets/img/gallery/4.png'
import img5 from '../../assets/img/gallery/5.png'
import img6 from '../../assets/img/gallery/6.png'
import img7 from '../../assets/img/gallery/7.png'

import { PhotoProvider, PhotoView } from 'react-photo-view';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
]


const Gallery = () => {
  return (
    // <PhotoProvider>
    //   <div className="foo">
    //     {images.map((item, index) => (
    //       <PhotoView key={index} src={item}>
    //         <img className='w-[100px]' src={item} alt="" />
    //       </PhotoView>
    //     ))}
    //   </div>
    // </PhotoProvider>
    <PhotoProvider>
      <PhotoView src={img1}>
        <img src={img1} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Gallery;