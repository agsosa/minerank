import styled from "styled-components";
import * as bp from "styled-breakpoints";

export const Container = styled.div`
  position: relative;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
  gap: 15px;

  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-track-piece {
    display: none;
  }
`;

export const Button = styled.button`
  width: 49px;
  height: 82px;
  opacity: 0.95;
  background-color: #f7f7f7;
  border: 0px;
  position: absolute;
  top: 15%;
  z-index: 5;
  cursor: pointer;
  
  ${bp.down("md")} {
    display: none;
  }
`;

export const ButtonPrev = styled(Button)`
  float: left;
  left: 0px;
`;

export const ButtonNext = styled(Button)`
  float: right;
  right: 0;
`;
