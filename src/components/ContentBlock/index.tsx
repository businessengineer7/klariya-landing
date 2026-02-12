import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  StoreBadgeWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  storeBadges,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {typeof section === "object" && (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section.map(
                      (
                        item: {
                          title: string;
                          content: string;
                          icon: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Col key={id} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        );
                      }
                    )}
                  </Row>
                </ServiceWrapper>
              )}
              {typeof button === "object" && (
                <ButtonWrapper>
                  {button.map(
                    (
                      item: {
                        color?: string;
                        title: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                        >
                          {t(item.title)}
                        </Button>
                      );
                    }
                  )}
                </ButtonWrapper>
              )}
              {storeBadges && (
                <StoreBadgeWrapper>
                  <a href="#" aria-label="App Store">
                    <SvgIcon src="app-store-badge.svg" width="180px" height="54px" />
                  </a>
                  <a href="#" aria-label="Google Play">
                    <SvgIcon src="google-play-badge.svg" width="180px" height="54px" />
                  </a>
                </StoreBadgeWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
