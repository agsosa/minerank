import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: auto;
  width: 100%;
  position: relative;

  background-color: #34495e;
  color: #e9e9e9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  font-size: 16px;
  line-height: 1.5;
  padding-top: 75px;

  background-image: url("/wp5.jpg");
  background-position: center;
  background-attachment: fixed;
`;

export const ContentOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  //   backdrop-filter: blur(0px);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AppDescription = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 40%;
`;

export const Disclaimer = styled.p`
  border-top: 1px solid gray;
  padding-top: 22px;
  z-index: 1;
  ${CONTENT_WIDTH}
`;

export const ColumnsContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
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
  z-index: 1;
  ${CONTENT_WIDTH}
`;

export const Copyright = styled.div`
  width: 100%;
  background-color: #131212;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 22px;
  z-index: 1;
  font-size: 14px;
`;

export const CopyrightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #links {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ${CONTENT_WIDTH}
`;
