import { WIDTH_CONTENT } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: auto;
  width: 100%;

  background-color: #34495E;
  color: #c9d6e4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  font-size: 16px;
  line-height: 1.5;
  padding-top: 50px;
`;

export const AppDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const Disclaimer = styled.p`
  border-top: 1px solid #c9d6e4;
  padding-top: 22px;
  ${WIDTH_CONTENT}
`;

export const ColumnsContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  ${WIDTH_CONTENT}
`;

export const Copyright = styled.div`
  width: 100%;
  background-color: #2C3E50;
  color: #51687F;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const CopyrightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #links {
    display: flex;
    gap: 15px;
  }

  ${WIDTH_CONTENT}
`;
