import styled from "styled-components";

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.textComum};
  font-family: ${(props) => props.theme.common.fontFamilyPrimary};
  font-style: normal;
  font-size: ${(props) => props.theme.common.fontSizeExtMeg};
  font-weight: ${(props) => props.theme.common.fontWeight700};
  letter-spacing: -0.08em;
  line-height: 25px;
  text-transform: uppercase;
`;