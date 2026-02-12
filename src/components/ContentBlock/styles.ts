import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  gap: 12px;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;

    button {
      max-width: 100%;
    }
  }
`;

export const StoreBadgeWrapper = styled("div")`
  display: flex;
  gap: 16px;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }

  a {
    display: block;
    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 12px;
    box-shadow: 0 4px 0 #111827;

    &:hover {
      transform: translateY(2px);
      box-shadow: 0 2px 0 #111827;
    }

    &:active {
      transform: translateY(4px);
      box-shadow: 0 0px 0 #111827;
    }
  }
`;
