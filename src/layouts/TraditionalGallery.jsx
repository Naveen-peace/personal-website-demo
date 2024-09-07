import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import UserData from '../data/data';
import { Icon } from '@iconify/react';
import {  useNavigate } from 'react-router-dom';

function TraditionalGallery() {

  const navigate = useNavigate();
  const handleNavigeone =(path)=>{
    navigate(path);
  }

  const handleNavigate = (photoGroup) => {
    navigate('/traditionalcollection', { state: { photos: Object.values(photoGroup) } });
  };

  const traditionalData = UserData[0].Gallery[0].traditional;

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <div className="heading-text">
          <p onClick={() => handleNavigeone('/gallery')}><Icon icon="icon-park-outline:back" width="24" height="24" /></p>
        <h1 className='heading'>Traditional Collection</h1>
        </div>
        <div className="traditiona-text">
          <h2>Sarees</h2>
          <div className="Traditional-head">
            {traditionalData[1].sarees.slice(0, 6).map((photoGroup, index) => (
              <div key={index} className="Traditional-photo fade-in-image">
                <img
                  src={Object.values(photoGroup)[0]}
                  alt={`Saree ${index}`}
                  className="gallery-photo"
                />
                <div onClick={() => handleNavigate(photoGroup)} className="hover-overlay">
                  <span>See Collection</span>
                </div>
              </div>
            ))}
          </div>
          <div className="lin-2"></div>

          <h2>Half Sarees</h2>
          <div className="Traditional-head">
            {traditionalData[2].halfsarees.slice(0, 4).map((photoGroup, index) => (
              <div key={index} className="Traditional-photo fade-in-image">
                <img
                  src={Object.values(photoGroup)[0]}
                  alt={`Half Saree ${index}`}
                  className="gallery-photo"
                />
                <div onClick={() => handleNavigate(photoGroup)} className="hover-overlay">
                  <span>See Collection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default TraditionalGallery;
