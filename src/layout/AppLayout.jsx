import styled from "styled-components";

import { Container } from "components/ui/Container";

const Wrapper = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const AppLayout = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
