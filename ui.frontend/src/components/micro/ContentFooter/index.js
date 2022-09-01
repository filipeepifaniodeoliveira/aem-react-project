import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { ContainerFooter, TextFooter } from "./ContentFooter.styled";

const ContentFooter = ({ description = ''}) => {
  return (
    <ContainerFooter>
      <TextFooter>{description}</TextFooter>
    </ContainerFooter>
  ) 
};
ContentFooter.defaultProps = {
  description: 'created by username - devChallenges.io',
}

export default MapTo('reactapp/components/content-footer')(ContentFooter);

