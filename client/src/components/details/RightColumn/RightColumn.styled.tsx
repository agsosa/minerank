import styled from "styled-components";
import { SharedCard } from "../shared/shared.styled";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ContentCard = styled(SharedCard)`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
