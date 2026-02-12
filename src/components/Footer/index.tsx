import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  LogoContainer,
  Para,
  FooterContainer,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <FooterSection>
      <Container>
        <Row justify="space-between" align="middle">
          <Col lg={6} md={6} sm={24} xs={24}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="180px"
                  height="52px"
                />
              </LogoContainer>
            </NavLink>
          </Col>
          <Col lg={10} md={10} sm={24} xs={24}>
            <Para style={{ textAlign: "center" }}>
              contact@klariya.com · Paris, France
            </Para>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <FooterContainer>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon src="france.svg" aria-label="Français" width="26px" height="26px" />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon src="united-states.svg" aria-label="English" width="26px" height="26px" />
                </LanguageSwitch>
              </LanguageSwitchContainer>
              <SocialLink href="https://twitter.com/klariya_app" src="twitter.svg" />
              <SocialLink href="https://linkedin.com/company/klariya" src="linkedin.svg" />
            </FooterContainer>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "1.5rem" }}>
          <Para style={{ fontSize: "0.8rem", opacity: 0.6 }}>
            © 2026 Klariya. {t("Application Security")} · {t("Software Principles")}
          </Para>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
