import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

/*  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);*/
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  ${CONTENT_WIDTH}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
`;