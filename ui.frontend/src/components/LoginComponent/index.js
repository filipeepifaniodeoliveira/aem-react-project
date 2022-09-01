import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const LoginComponent = ({ email, password }) => {
  return (
    <div>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
};

LoginComponent.defaultProps = {
  email: 'Digite seu email',
  password: 'Digite seu password',
}

export default MapTo('reactapp/components/new-component')(LoginComponent);
