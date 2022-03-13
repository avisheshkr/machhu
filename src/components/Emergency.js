import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import EmergencyChild from "./EmergencyChild";

const Emergency = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <h2 data-aos="fade-up" data-aos-duration="1500">
        The Emergency Health Service
      </h2>
      <MainPara data-aos="fade-up" data-aos-duration="1500">
        We are a digital gateway to make emergency health services more
        accessible and prompt applications to deal with our basic health
        facilities.
      </MainPara>
      <ColumnContainer>
        <EmergencyChild
          paragraph="We provide health care services at your home for an illness or injury with help of our medical team."
          imageUrl="images/homecare.svg"
          title="Home Care"
        />
        <EmergencyChild
          paragraph="Get your lab samples collected at your doorstep and receive your report via digital platform."
          imageUrl="images/labtest.svg"
          title="Lab Test"
        />
        <EmergencyChild
          paragraph={`We will manage and provide you the requested blood. We believe that "Donate blood save life."`}
          imageUrl="images/bloodrequest.svg"
          title="Blood Request Management"
        />
      </ColumnContainer>
    </Container>
  );
};

export default Emergency;

const Container = styled.div`
  // background-image: url("images/machhu.gif");
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-size: contain;
  padding: 10rem;

  h2 {
    text-align: center;
  }
`;

const MainPara = styled.p`
  text-align: center;
  padding: 4rem 0;
  line-height: 4rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding-top: 2rem;
  flex-wrap: wrap;
`;
