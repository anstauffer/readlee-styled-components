import React from "react";
import styled from "styled-components";
import { Size, getSize, BlueFont } from "./constants";

interface PassedLogoProps {
  fontSize?: Size;
  color?: string;
}

interface StyledLogoProps {
  readonly fontSize: Size;
  readonly color: string;
}

export const StyledLogo = styled.div<StyledLogoProps>`
  color: ${({ color }) => color};
  font-family: Arial;
  font-weight: bold;
  font-size: ${({ fontSize }) => getSize(fontSize)};
`;

const Logo = ({ fontSize = "medium", color = BlueFont }: PassedLogoProps) => {
  return (
    <StyledLogo color={color} fontSize={fontSize}>
      Readlee
    </StyledLogo>
  );
};

export default Logo;
