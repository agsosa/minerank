import { HEADER_HEIGHT } from "src/components/common/Header/Header.styled";
import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  margin-bottom: 45px;

  ${CONTENT_WIDTH}
`;
