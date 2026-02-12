import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #F8FAFC;
  padding: 2rem 0 1.5rem;
  border-top: 1px solid #E5E7EB;

  @media only screen and (max-width: 414px) {
    padding: 1.5rem 0 1rem;
  }
`;

export const NavLink = styled(Link)`
  display: block;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoContainer = styled("div")`
  display: flex;

  @media only screen and (max-width: 575px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const Para = styled("div")`
  color: #6B7280;
  font-size: 0.9rem;
  width: 100%;

  @media only screen and (max-width: 575px) {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;

export const FooterContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  a {
    transition: transform 0.15s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 575px) {
    justify-content: center;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  gap: 8px;
`;
