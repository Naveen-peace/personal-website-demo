import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFavorites } from '../contex/FavoritesContex'; // Ensure correct path

function TraditionalCollection() {

  const navigate = useNavigate();

  const handleNavigeone = (path) => {
    navigate(path);
  }

  const location = useLocation();
  const photos = location.state?.photos || [];
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
  const { favoritePhotos, addToFavorites } = useFavorites();

  const handleAddToFavorites = (photo) => {
    if (!favoritePhotos.includes(photo)) {
      addToFavorites(photo);
      toast.success("Your favorite has been added!");
    } else {
      toast.info("This photo is already in your favorites.");
    }
  };

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <div className="collection-head">
          <div  onClick={() => handleNavigeone('/gallerytraditional')} className="icon-back"><Icon icon="system-uicons:exit-left" width="34" height="34" /></div>
          <div className="main-image-container">
            {photos.length > 0 && (
              <img id="main-image" src={selectedPhoto} alt="Main" className="main-photo fade-in" />
            )}
            <div
              className={`heart ${favoritePhotos.includes(selectedPhoto) ? 'red-heart  bounce-in' : 'bounce-out'}`}
              onClick={() => handleAddToFavorites(selectedPhoto)}
            >
              <Icon icon="line-md:heart-filled" width="24" height="24" />
            </div>
          </div>
          <div className="thumbnail-container">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${selectedPhoto === photo ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedPhoto(photo);
                  document.getElementById('main-image').src = photo;
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </section>
  );
}

export default TraditionalCollection;
