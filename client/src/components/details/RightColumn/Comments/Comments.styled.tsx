import styled from "styled-components";
import { SharedCard } from "../../shared/shared.styled";

export const Container = styled(SharedCard)`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CommentsList = styled.div`
  display: flex;
`;

export const CommentEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  #date {
    font-size: 12px;
  }

  #name {
    font-weight: bold;
  }

  #text {
    font-size: 14px;
  }
`;

export const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  gap: 10px;

  .comment-input {
    width: 100%;
    display: hidden;
  }
`;
