import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import UserData from '../data/data';

function ClassicGallery() {
  const navigate = useNavigate();

  const handleNavigeone = (path) => {
    navigate(path);
  }

  const handleNavigate = (photoGroup) => {
    navigate('/ClassicCollection', { state: { photos: Object.values(photoGroup) } });
  };
  const classicData = UserData[0].Gallery[2].classic;

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <div className="heading-text">
          <p onClick={() => handleNavigeone('/gallery')}><Icon icon="icon-park-outline:back" width="24" height="24" /></p>
          <h1 className='heading'>Classic Collection</h1>
        </div>
        <div className="traditiona-text">
          <h2>Sarees</h2>
          <div className="Traditional-head">
            {classicData[1].sarees.slice(0, 22).map((photoGroup, index) => (
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
            {classicData[2].halfsarees.slice(0, 4).map((photoGroup, index) => (
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

          <h2>chudi</h2>
          <div className="Traditional-head">
            {classicData[3].chudi.slice(0, 23).map((photoGroup, index) => (
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
            {classicData[4].modern.slice(0, 4).map((photoGroup, index) => (
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

export default ClassicGallery