// linking react 
import React from 'react';
// importing helper
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photos
import photo from "../../assets/small/commercial/0.jpg";
// import photolist
import PhotoList from '../PhotoList';

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;