import { HEADER_HEIGHT } from "src/components/common/Header/Header.styled";
import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  gap: 30px;
  margin: 50px 0px;

  ${CONTENT_WIDTH}
`;
