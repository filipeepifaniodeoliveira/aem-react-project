import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { 
  Container, 
  ContainerImage, 
  ContainerTexts, 
  Title,
  Descriptions,
  ButtonBack,
} from "./NotFoundComponent.styled";

const NotFoundComponent = ({ 
  imageContainer,
  titleNotFound,
  descriptNotFound,
  buttonNotFound,
 }) => {
  return (
    <Container>
      <ContainerImage>
        <img src={imageContainer.src} alt='Img' />
      </ContainerImage>
      <ContainerTexts>
        <Title>{titleNotFound}</Title>
        <Descriptions>{descriptNotFound}</Descriptions>
        <ButtonBack>{buttonNotFound}</ButtonBack>
      </ContainerTexts>
    </Container>
  );
};

NotFoundComponent.defaultProps = {
  imageContainer:{ 
    src: 'https://via.placeholder.com/150'   
  },
  titleNotFound: 'I have bad news for you',
  descriptNotFound: 'The page you are looking for might be removed or is temporarily unavailable',
  buttonNotFound: 'BACK TO HOME',
}

export default MapTo('reactapp/components/not-found-container')(NotFoundComponent);
