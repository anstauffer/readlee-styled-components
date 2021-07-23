import React from "react";
import styled from "styled-components";
import { Size, getSize } from "./constants";

interface SpacerProps {
  size?: Size;
}

const Spacer = styled.div<SpacerProps>`
  height: ${({ size = "medium" }) => getSize(size)};
`;

export default Spacer;
