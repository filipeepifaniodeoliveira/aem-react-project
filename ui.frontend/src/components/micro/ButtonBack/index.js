import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Title } from "./ButtonBack.styled";

const ButtonBack = ({ placeholder }) => {
  return (
    <div>
      <Title>Olá</Title>
      <button className="buttonBack">{placeholder}</button>
    </div>
  );
};

ButtonBack.defaultProps = {
  placeholder: 'BACK TO HOME',
}

export default MapTo('reactapp/components/button-back')(ButtonBack);
