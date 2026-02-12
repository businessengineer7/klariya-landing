import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% { transform: translateY(120px) rotate(0deg); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-120px) rotate(360deg); opacity: 0; }
`;

export const BannerSection = styled("section")`
  background: #EFF6FF;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  margin: 4rem 0;
  border-radius: 24px;

  @media only screen and (max-width: 768px) {
    border-radius: 0;
    margin: 2rem -1rem;
    padding: 3rem 1rem;
  }
`;

export const BannerRow = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

export const MascotSide = styled("div")`
  position: relative;
  width: 400px;
  height: 380px;
  flex-shrink: 0;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 280px;
  }
`;

export const WhiteBlob = styled("div")`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 200px;
  background: white;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 150px;
  }
`;

export const NovaSvgWrapper = styled("div")`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media only screen and (max-width: 768px) {
    bottom: 30px;

    svg {
      width: 220px;
      height: 220px;
    }
  }
`;

export const MusicNote = styled("div")`
  position: absolute;
  font-size: 24px;
  opacity: 0;
  z-index: 3;

  &.note1 {
    left: 10%;
    color: #60A5FA;
    animation: ${floatUp} 2s infinite linear;
  }

  &.note2 {
    right: 10%;
    color: #10B981;
    animation: ${floatUp} 2.5s infinite linear 0.5s;
  }

  &.note3 {
    left: 25%;
    color: #3B82F6;
    font-size: 30px;
    animation: ${floatUp} 3s infinite linear 1s;
  }
`;

export const TextSide = styled("div")`
  flex: 1;
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const SmallText = styled("p")`
  color: #6B7280;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

export const GradientTitle = styled("h2")`
  font-size: 3.5rem;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  background: linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CTAButton = styled("button")`
  background: #2563EB;
  color: white;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 16px 36px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 0 #1D4ED8;
  transition: all 0.15s ease;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #1D4ED8;
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 0px 0 #1D4ED8;
  }
`;
