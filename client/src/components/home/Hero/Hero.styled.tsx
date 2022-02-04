import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #34495e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  background-image: url("/wp4.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 180px 0px;
  z-index: 1;

  ${CONTENT_WIDTH}
`;

export const ContentOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(3px);
`;

export const Left = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;

export const Right = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  padding: 20px;
`;
