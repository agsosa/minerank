import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #34495e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0px;
  ${CONTENT_WIDTH}
`;

export const Left = styled.div``;

export const Right = styled.div``;
