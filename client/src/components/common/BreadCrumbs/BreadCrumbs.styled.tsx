import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 15px;

  ${CONTENT_WIDTH}
`;

export const Entry = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
`;
