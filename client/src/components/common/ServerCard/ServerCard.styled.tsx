import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: white;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03) !important;
  scroll-snap-align: start;

 // flex-direction: column; // TODO: For carousel
`;

export const Image = styled(NextImage)`
  border-radius: 290486px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const CopyIP = styled.button`
  border: none;
  background-color: transparent;
  font-size: 11px;
  font-weight: bold;
`;

export const Name = styled.span`
  font-size: 17px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 5px;

  svg {
    width: 17px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  font-size: 13px;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Stat = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const Tags = styled.span`
  font-size: 12px;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
