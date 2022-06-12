import styled from "styled-components";

import { Header } from "components/common";
import { Container } from "components/ui";

import { AdaptiveFont } from "utils/adaptiveFont";

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const UpdatedContainer = styled(Container)`
  flex-grow: 1;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--fw-bold);
  ${AdaptiveFont({ pcSize: 36, mobSize: 18 })};
`;

const NotFoundPage = () => (
  <>
    <Header />
    <Main>
      <UpdatedContainer>
        <Inner>Page not found</Inner>
      </UpdatedContainer>
    </Main>
  </>
);

export default NotFoundPage;
