import { WIDTH_CONTENT } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #34495e;
  color: #c9d6e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  ${WIDTH_CONTENT}
`;
