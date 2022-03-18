import { HEADER_HEIGHT } from "src/components/common/Header/Header.styled";
import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin-bottom: 45px;

  ${CONTENT_WIDTH}
`;
