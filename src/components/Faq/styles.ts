import styled from "styled-components";

export const FaqSection = styled("section")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FaqTitle = styled("h6")`
  text-align: center;
  margin-bottom: 3rem;
`;

export const FaqList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FaqItem = styled("div")<{ isOpen: boolean }>`
  background: ${({ isOpen }) => (isOpen ? "#EFF6FF" : "#F8FAFC")};
  border-radius: 16px;
  padding: 0;
  cursor: pointer;
  border: 2px solid ${({ isOpen }) => (isOpen ? "#2563EB" : "transparent")};
  transition: all 0.2s ease;
  box-shadow: 0 2px 0 ${({ isOpen }) => (isOpen ? "#BFDBFE" : "#E2E8F0")};

  &:hover {
    background: #EFF6FF;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0px 0 #E2E8F0;
  }
`;

export const FaqQuestion = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  user-select: none;

  span {
    font-size: 1rem;
    font-weight: 700;
    color: #1F2937;
  }
`;

export const FaqIcon = styled("span")<{ isOpen: boolean }>`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2563EB;
  transition: transform 0.2s ease;
  transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FaqAnswer = styled("div")<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.2s ease, padding 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "0 24px 20px" : "0 24px")};
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6B7280;
`;
