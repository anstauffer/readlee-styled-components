import React from "react";
import styled from "styled-components";
import { OrangeFont } from "./constants";

import Logo from "./Logo";
import Spacer from "./Spacer";
import Paragraph, { SpecialParagraph, HoverParagraph } from "./Paragraph";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Spacer size="large" />
      <Logo fontSize="large" />
      <Spacer />
      <Logo fontSize="small" color={OrangeFont} />
      <Spacer size="small" />
      <Paragraph>This is a normal paragraph</Paragraph>
      <Spacer />
      <SpecialParagraph>
        This is a special paragraph with overriden styles
      </SpecialParagraph>
      <Spacer />
      <HoverParagraph>Hover over me!</HoverParagraph>
    </StyledApp>
  );
}

export default App;
