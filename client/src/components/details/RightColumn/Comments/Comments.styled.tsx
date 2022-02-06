import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
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
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
`;