import { useState } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import {
  FaqSection,
  FaqTitle,
  FaqList,
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  FaqIcon,
} from "./styles";

interface FaqProps {
  title: string;
  items: { question: string; answer: string }[];
  id: string;
  t: TFunction;
}

const Faq = ({ title, items, id, t }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqSection id={id}>
      <Fade direction="up" triggerOnce>
        <Row justify="center">
          <Col lg={16} md={20} sm={24} xs={24}>
            <FaqTitle>{t(title)}</FaqTitle>
            <FaqList>
              {items.map((item, index) => (
                <FaqItem
                  key={index}
                  isOpen={openIndex === index}
                  onClick={() => toggle(index)}
                >
                  <FaqQuestion>
                    <span>{t(item.question)}</span>
                    <FaqIcon isOpen={openIndex === index}>+</FaqIcon>
                  </FaqQuestion>
                  <FaqAnswer isOpen={openIndex === index}>
                    {t(item.answer)}
                  </FaqAnswer>
                </FaqItem>
              ))}
            </FaqList>
          </Col>
        </Row>
      </Fade>
    </FaqSection>
  );
};

export default withTranslation()(Faq);
