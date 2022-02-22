import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Right = styled.div`
  display: flex;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  font-size: 14px;
`;
