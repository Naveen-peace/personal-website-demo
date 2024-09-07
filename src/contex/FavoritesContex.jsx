import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const addToFavorites = (photo) => {
    setFavoritePhotos(prevFavorites => [...prevFavorites, photo]);
  };

  return (
    <FavoritesContext.Provider value={{ favoritePhotos, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
