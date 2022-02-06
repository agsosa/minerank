import styled from "styled-components";
import { SharedCard } from "../shared/shared.styled";

export const Container = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Card = styled(SharedCard)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  #content {
    padding: 10px;
  }
`;

export const Stat = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;

  #ip {
    cursor: pointer;
  }
`;

export const IPAddress = styled(Stat)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: black;
  }
`;

export const SmallStat = styled(Stat)`
  font-size: 12px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
