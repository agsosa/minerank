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
  height: 100vh;

  background-image: url("/wp4.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0px;
  padding-top: 140px;
  z-index: 1;

  ${CONTENT_WIDTH}
`;

export const ContentOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(3.5px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;

  h1,
  h3,
  h2 {
    display: table;
    background-color: black;
    padding: 6px 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h1 {
    background-color: #158f3e;
  }
`;

export const Button = styled.button`
  background-color: #158f3e;
  padding: 10px;
  margin-left: 3.5px;
  margin-top: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #007527;
    color: white;
  }
`;
