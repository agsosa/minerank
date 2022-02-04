import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 15px;
  width: 400px;
`;

export const Image = styled(NextImage)`
  border-radius: 290486px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span``;

export const StatsContainer = styled.div`
  display: flex;
`;
