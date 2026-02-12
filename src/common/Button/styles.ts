import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#2563EB"};
  color: ${(p) => (p.color ? "#2563EB" : "#fff")};
  font-size: 1rem;
  font-weight: 800;
  width: 100%;
  border: ${(p) => p.color ? "2px solid #2563EB" : "none"};
  border-radius: 16px;
  padding: 16px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 200px;
  transition: all 0.15s ease-in-out;
  box-shadow: 0 4px 0 ${(p) => p.color ? "#BFDBFE" : "#1D4ED8"};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: ${(p) => (p.color ? "#2563EB" : "#fff")};
    transform: translateY(2px);
    box-shadow: 0 2px 0 ${(p) => p.color ? "#BFDBFE" : "#1D4ED8"};
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 0px 0 ${(p) => p.color ? "#BFDBFE" : "#1D4ED8"};
  }
`;
