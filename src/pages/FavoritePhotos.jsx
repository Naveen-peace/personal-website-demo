import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { useFavorites } from '../contex/FavoritesContex'; // Ensure correct path

function FavoritePhotos() {
  const { favoritePhotos } = useFavorites(); // Use context to get favorite photos

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <h2 className='fav-text'>Your Favorite Photos</h2>
        <div className="favorite-photos-container">
          {favoritePhotos.length > 0 ? (
            favoritePhotos.map((photo, index) => (
              <img key={index} src={photo} alt={`Favorite ${index}`} className="favorite-photo" />
            ))
          ) : (
            <p style={{padding:'200px 0',textAlign:'center'}}>No favorite photos yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default FavoritePhotos;
