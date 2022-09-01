import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Title } from "./TitlePage.styled";

const TitlePage = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

TitlePage.defaultProps = {
  title: 'Digite seu título',
}

export default MapTo('reactapp/components/title-page')(TitlePage);
