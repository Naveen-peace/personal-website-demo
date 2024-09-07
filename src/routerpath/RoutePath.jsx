import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import TraditionalGallery from '../layouts/TraditionalGallery';
import ModernGallery from '../layouts/ModernGallery';
import ClassicGallery from '../layouts/ClassicGallery';
import TraditonalCollection from '../layouts/TraditonalCollection';
import ModernCollection from '../layouts/ModernCollection';
import ClassicCollection from '../layouts/ClassicCollection';
import Contact from '../pages/Contact';
import FavoritePhotos from '../pages/FavoritePhotos';
import { FavoritesProvider } from '../contex/FavoritesContex'; // Ensure correct path

function RoutePath() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fav' element={<FavoritePhotos />} />
        <Route path="/gallerytraditional" element={<TraditionalGallery />} />
        <Route path="/gallerymodern" element={<ModernGallery />} />
        <Route path="/galleryclassic" element={<ClassicGallery />} />
        <Route path="/traditionalcollection" element={<TraditonalCollection />} />
        <Route path="/moderncollection" element={<ModernCollection />} />
        <Route path="/classiccollection" element={<ClassicCollection />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default RoutePath;
