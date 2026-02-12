import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import {
  BannerSection,
  BannerRow,
  MascotSide,
  WhiteBlob,
  NovaSvgWrapper,
  MusicNote,
  TextSide,
  SmallText,
  GradientTitle,
  CTAButton,
} from "./styles";

const PartyNova = ({ t }: { t: TFunction }) => {
  return (
    <BannerSection id="party">
      <Fade triggerOnce>
        <BannerRow>
          <MascotSide>
            <WhiteBlob />
            <MusicNote className="note1">♪</MusicNote>
            <MusicNote className="note2">♫</MusicNote>
            <MusicNote className="note3">♩</MusicNote>
            <NovaSvgWrapper>
              <svg width="280" height="280" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="partyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB">
                      <animate attributeName="stop-color" values="#2563EB;#10B981;#8B5CF6;#2563EB" dur="1.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#10B981">
                      <animate attributeName="stop-color" values="#10B981;#8B5CF6;#2563EB;#10B981" dur="1.5s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <radialGradient id="partyEyeGrad">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </radialGradient>
                </defs>

                <g id="whole-body-groove">
                  <animateTransform attributeName="transform" type="translate"
                    values="0 0; 0 20; 0 -10; 0 0"
                    keyTimes="0; 0.4; 0.7; 1"
                    dur="0.45s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                    additive="sum" />
                  <animateTransform attributeName="transform" type="scale"
                    values="1 1; 1.15 0.85; 0.9 1.1; 1 1"
                    keyTimes="0; 0.4; 0.7; 1"
                    dur="0.45s"
                    repeatCount="indefinite"
                    additive="sum" />

                  {/* Body */}
                  <circle cx="100" cy="110" r="35" fill="url(#partyGrad)" />

                  {/* Head */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate"
                      values="0 100 75; -12 100 75; 12 100 75; 0 100 75"
                      keyTimes="0; 0.25; 0.75; 1"
                      dur="0.45s"
                      repeatCount="indefinite"
                      additive="sum" />
                    <animateTransform attributeName="transform" type="translate"
                      values="0 0; -2 4; 2 -2; 0 0"
                      dur="0.45s" repeatCount="indefinite" additive="sum" />

                    <circle cx="100" cy="75" r="28" fill="url(#partyGrad)" />

                    {/* Ears */}
                    <path d="M 75 55 L 70 40 L 80 48 Z" fill="url(#partyGrad)" />
                    <path d="M 125 55 L 130 40 L 120 48 Z" fill="url(#partyGrad)" />

                    {/* Eyes */}
                    <circle cx="88" cy="75" r="11" fill="white" />
                    <circle cx="88" cy="75" r="8" fill="url(#partyEyeGrad)">
                      <animate attributeName="r" values="8;7;8" dur="0.225s" repeatCount="indefinite" />
                    </circle>
                    <path d="M 90 71 L 91 73 L 93 73 L 91.5 74.5 L 92 76.5 L 90 75 L 88 76.5 L 88.5 74.5 L 87 73 L 89 73 Z" fill="white" />

                    <circle cx="112" cy="75" r="11" fill="white" />
                    <circle cx="112" cy="75" r="8" fill="url(#partyEyeGrad)">
                      <animate attributeName="r" values="8;7;8" dur="0.225s" repeatCount="indefinite" />
                    </circle>
                    <path d="M 114 71 L 115 73 L 117 73 L 115.5 74.5 L 116 76.5 L 114 75 L 112 76.5 L 112.5 74.5 L 111 73 L 113 73 Z" fill="white" />

                    {/* Beak */}
                    <path d="M 100 82 L 96 88 L 104 88 Z" fill="#F59E0B" />
                  </g>

                  {/* Wings */}
                  <ellipse cx="68" cy="110" rx="12" ry="25" fill="#1D4ED8" opacity="0.9">
                    <animateTransform attributeName="transform" type="rotate"
                      values="-5 68 110; -45 68 110; -5 68 110"
                      keyTimes="0; 0.5; 1"
                      dur="0.45s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx="132" cy="110" rx="12" ry="25" fill="#1D4ED8" opacity="0.9">
                    <animateTransform attributeName="transform" type="rotate"
                      values="5 132 110; 45 132 110; 5 132 110"
                      keyTimes="0; 0.5; 1"
                      dur="0.45s" repeatCount="indefinite" />
                  </ellipse>
                </g>

                {/* Shockwave */}
                <ellipse cx="100" cy="160" rx="40" ry="10" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0">
                  <animate attributeName="rx" values="20;60" dur="0.45s" begin="0.3s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="5;15" dur="0.45s" begin="0.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="0.45s" begin="0.3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="3;0" dur="0.45s" begin="0.3s" repeatCount="indefinite" />
                </ellipse>
              </svg>
            </NovaSvgWrapper>
          </MascotSide>

          <TextSide>
            <SmallText>{t("Nova analyse, résume et vous explique")}</SmallText>
            <GradientTitle>{t("Vos documents décryptés en un instant")}</GradientTitle>
            <CTAButton>{t("Essayer gratuitement")}</CTAButton>
          </TextSide>
        </BannerRow>
      </Fade>
    </BannerSection>
  );
};

export default withTranslation()(PartyNova);
