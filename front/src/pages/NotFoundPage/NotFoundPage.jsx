import styled from "styled-components";

import { Header } from "components/common";
import { Container } from "components/ui";

import { AdaptiveFont } from "utils/helpers/adaptiveFont.helper";

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const UpdatedContainer = styled(Container)`
  flex-grow: 1;
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  font-weight: 700;
  justify-content: center;
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
