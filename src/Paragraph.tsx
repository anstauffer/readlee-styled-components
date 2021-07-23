import React from "react";
import styled from "styled-components";
import { Size, getSize } from "./constants";

interface ParagraphProps {
  size?: Size;
}

const Paragraph = styled.div<ParagraphProps>`
  font-size: ${({ size = "medium" }) => getSize(size)};
`;

// You can override styles of a different styled component.
// Makes it easy to make a base component and add extra styles for more specific ones!
export const SpecialParagraph = styled(Paragraph)`
  font-size: 50px;
  color: purple;
`;

// Styled components support pseudoselectors, pseudoelements, and other scss-like syntax
export const HoverParagraph = styled(Paragraph)`
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export default Paragraph;
