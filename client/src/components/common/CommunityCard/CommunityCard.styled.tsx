import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.div<{ isFeatured?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: ${(props) => (props.isFeatured ? "#fff8dc" : "white")};
  padding: 16px 16px 16px 20px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03) !important;
  scroll-snap-align: start;
  cursor: pointer;
  border-left: ${(props) => (props.isFeatured ? `4px solid #ffc037` : "none")};
  // flex-direction: column; // TODO: For carousel
`;

export const FeaturedText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -23px;
  margin-top: 25px;
  color: #ffc037;
  font-weight: bold;
  font-size: 10px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
`;

export const Image = styled(NextImage)`
  border-radius: 290486px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 3px;
`;

export const CopyIP = styled.button`
  border: none;
  background-color: transparent;
  font-size: 11px;
  font-weight: bold;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
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
  grid-template-columns: 1fr 2fr;
  font-size: 13px;
  align-items: center;
  gap: 28px;
`;

export const Stat = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Tags = styled.span`
  font-size: 12px;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
