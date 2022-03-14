import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
  z-index: 1;

  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
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
  cursor: pointer;
`;
