import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

require('./titlePlaceholder.css');

const TitlePlaceholder = ({ title }) => {
  return (
    <div>
      <p className="titlePlaceholder">{title}</p>
    </div>
  );
};

TitlePlaceholder.defaultProps = {
  title: 'Digite seu title',
}

export default MapTo('reactapp/components/title-placeholder')(TitlePlaceholder);
