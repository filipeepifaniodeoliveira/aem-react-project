import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

require('./textPlaceholder.css');

const TextPlaceholder = ({ text }) => {
  return (
    <div>
      <p className="textPlaceholder">{text}</p>
    </div>
  );
};

TextPlaceholder.defaultProps = {
  text: 'Digite seu texto',
}

export default MapTo('reactapp/components/text-placeholder')(TextPlaceholder);
