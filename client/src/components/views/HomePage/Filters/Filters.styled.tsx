import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03) !important;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  ${CONTENT_WIDTH}
`;

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
