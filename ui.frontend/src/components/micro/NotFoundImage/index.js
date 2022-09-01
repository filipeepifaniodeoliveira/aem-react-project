import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const NotFoundImage = ({ image = {}}) => {
  return <img src={image.src} alt='Img' />;
};
NotFoundImage.defaultProps = {
  image: { 
    src: 'https://via.placeholder.com/150' 
  },
}

export default MapTo('reactapp/components/not-found-image')(NotFoundImage);

