import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const HEADER_HEIGHT = "60px";

export const Container = styled.div<{ fixedBackground?: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.fixedBackground ? "#131212" : "transparent")};
  font-weight: 500;
  //border-bottom: 3px rgba(21, 143, 62, 1) solid;
  /*background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);*/
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_HEIGHT};
  ${CONTENT_WIDTH}
`;

export const Flex = styled.div`
  display: flex;
  gap: 50px;
`;
