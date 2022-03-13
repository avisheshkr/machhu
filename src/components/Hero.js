import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const HEADINGS = ["We are machhu.", "Emergency Health Services"];

  const TEXTS = [
    "A digital platform to address the daily routine of every individual",
    "We provide emergency health services for institutions with the help of medical professionals",
  ];

  useEffect(() => {
    AOS.init();
    const intervalId = setInterval(() => setIndex((index) => index + 1), 7000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Container>
        <h1 data-aos="fade-up" data-aos-duration="2000">
          <TextTransition
            text={HEADINGS[index % HEADINGS.length]}
            springConfig={presets.wobbly}
            noOverflow={true}
          />
        </h1>
        <p data-aos="fade-right" data-aos-duration="2000">
          {/* A place where strategy, creativity and technology unite */}
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.default}
            noOverflow={true}
          />
        </p>
      </Container>
    </>
  );
};

export default Hero;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0 3rem;

  h1 {
    padding-top: 10vh;
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (min-width: 500px) {
    p {
      padding: 0 5rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 5rem;
  }

  @media (max-width: 550px) {
    padding: 0 2rem;
  }

  @media (max-width: 426px) {
    height: 105vh;
    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 2.5rem;
    }
  }
`;
