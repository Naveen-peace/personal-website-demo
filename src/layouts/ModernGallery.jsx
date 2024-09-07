import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import UserData from '../data/data';

function ModernGallery() {
  const navigate = useNavigate();

  const handleNavigeone =(path)=>{
    navigate(path);
  }

  const handleNavigate = (photoGroup) => {
    navigate('/traditionalcollection', { state: { photos: Object.values(photoGroup) } });
  };

  const modernData = UserData[0].Gallery[1].modern;

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
      <div className="heading-text">
          <p onClick={() => handleNavigeone('/gallery')}><Icon icon="icon-park-outline:back" width="24" height="24" /></p>
          <h1 className='heading'>Modern Collection</h1>
        </div>
        <div className="traditiona-text">
        <h2>Sarees</h2>
        <div className="Traditional-head">
          {modernData[1].sarees.slice(0, 2).map((photoGroup, index) => (
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

        <h2>Skirts</h2>
        <div className="Traditional-head">
          {modernData[2].Skirts.slice(0, 13).map((photoGroup, index) => (
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
        <div className="lin-2"></div>

        <h2>tshirtphant</h2>
        <div className="Traditional-head">
          {modernData[3].tshirtphant.slice(0, 14).map((photoGroup, index) => (
            <div key={index} className="Traditional-photo">
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
        <div className="lin-2"></div>

        <h2>modern</h2>
        <div className="Traditional-head">
          {modernData[4].moderns.slice(0, 4).map((photoGroup, index) => (
            <div key={index} className="Traditional-photo">
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

export default ModernGallery