import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 780px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 780px) {
    display: block;
    justify-content: center;
    margin-top: 0px;
  }

  img {
    max-height: 238px;
    max-width: 286px;
    @media screen and (min-width: 780px) {
      max-height: 414px;
      max-width: 539px;
    }
  }

`;

export const ContainerTexts = styled.div`
  @media screen and (min-width: 780px) {
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.textComum};
  font-family: ${(props) => props.theme.common.fontFamilySecundary};
  font-style: normal;
  font-size: ${(props) => props.theme.common.fontTitlePrimary};
  font-weight: ${(props) => props.theme.common.fontWeight700};
  letter-spacing: -0.035em;
  line-height: 71px;
  margin-top: 50px;

  @media screen and (min-width: 780px) {
    font-size: ${(props) => props.theme.common.fontTitleLarge};
    letter-spacing: -0.035em;
    line-height: 95px;
  }
`;

export const Descriptions = styled.p`
  color: ${(props) => props.theme.colors.textAlternative};
  font-family: ${(props) => props.theme.common.fontFamilySecundary};
  font-style: normal;
  font-weight: ${(props) => props.theme.common.fontWeight400};
  font-size: ${(props) => props.theme.common.fontSizeSubtitle};
  letter-spacing: -0.035em;
  line-height: 27px;
  margin-bottom: 40px;
  max-width: 70%;

  @media screen and (min-width: 780px) {
    font-size: ${(props) => props.theme.common.fontSizeExtMeg};
    letter-spacing: -0.035em;
    line-height: 36px;
    max-width: 60%;
  }
`;

export const ButtonBack = styled.button`
  background: ${(props) => props.theme.colors.textComum};
  color: ${(props) => props.theme.colors.textAlternativePlace};
  font-family: ${(props) => props.theme.common.fontFamilyPrimary};
  font-style: normal;
  font-weight: ${(props) => props.theme.common.fontWeight700};
  font-size: ${(props) => props.theme.common.fontSizeSmall};
  height: 68px;
  letter-spacing: -0.035em;
  line-height: 21px;
  text-transform: uppercase;
  width: 216px;
`;