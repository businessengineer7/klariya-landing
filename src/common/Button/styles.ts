import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#2563EB"};
  color: ${(p) => (p.color ? "#2563EB" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #EFF6FF;
  border-radius: 8px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(37 99 235 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #1D4ED8;
    background-color: #1D4ED8;
  }
`;
