import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ showCloseMenu, show }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container>
        <Logo>machhu.</Logo>

        <Menu
          onClick={showCloseMenu}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className={`${show ? "rotate" : ""}`}></div>
          <div className={`${show ? "rotate-translate" : ""}`}></div>
        </Menu>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  transform: rotate(-90deg);
  font-family: "Gilroy Bold";
  font-size: 3rem;
  color: #f56058;

  @media (max-width: 900px) {
    margin-left: -5rem;
  }

  @media (max-width: 768px) {
    margin-left: -2rem;
  }

  @media (max-width: 426px) {
    font-size: 2.5rem;
  }
`;

const Menu = styled.div`
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  gap: 0.7rem;
  cursor: pointer;

  div {
    transition: all 0.3s ease-in-out;
    height: 0.2rem;
    width: 3.2rem;
    background-color: #f56058;
  }

  @media (max-width: 900px) {
    margin-right: 0rem;
  }

  @media (max-width: 768px) {
    margin: 0 2.5rem;
    justify-content: flex-start;
  }
`;
