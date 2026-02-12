import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const floatUp = keyframes`
  0% { transform: translateY(150px) rotate(0deg); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-150px) rotate(360deg); opacity: 0; }
`;

export const PartySection = styled("section")`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartyTitle = styled("h6")`
  text-align: center;
  margin-bottom: 2rem;
`;

export const DanceFloor = styled("div")`
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at bottom, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
  border-radius: 50%;

  @media only screen and (max-width: 575px) {
    width: 300px;
    height: 300px;

    svg {
      width: 250px;
      height: 250px;
    }
  }
`;

export const DiscoLights = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 5s linear infinite;
  opacity: 0.3;
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0%,
    #2563EB 10%,
    transparent 20%,
    #10B981 30%,
    transparent 40%,
    #3B82F6 50%,
    transparent 60%,
    #2563EB 70%,
    transparent 80%,
    #10B981 90%,
    transparent 100%
  );
  filter: blur(20px);
  border-radius: 50%;
`;

export const MusicNote = styled("div")`
  position: absolute;
  font-size: 24px;
  color: #2563EB;
  opacity: 0;
  z-index: 5;

  &.note1 {
    left: 15%;
    animation: ${floatUp} 2s infinite linear;
  }

  &.note2 {
    left: 80%;
    animation: ${floatUp} 2.5s infinite linear 0.5s;
    color: #10B981;
  }

  &.note3 {
    left: 30%;
    animation: ${floatUp} 3s infinite linear 1s;
    color: #3B82F6;
    font-size: 30px;
  }
`;
