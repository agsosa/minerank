import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 22px;

  ${CONTENT_WIDTH}
`;
