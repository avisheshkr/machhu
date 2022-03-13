import React, { useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileMenu = ({ show }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container show={show} data-aos={`${show ? "fade-down" : "fade-up"}`}>
        {/* <TitleBar>
          <Logo>machhu.</Logo>

          <MenuIcon onClick={showCloseMenu}>
            <AiOutlineClose />
          </MenuIcon>
        </TitleBar> */}
        <Menu>
          <li data-aos="fade-down" data-aos-duration="500">
            work
          </li>
          <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
            about
          </li>
          <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
            services
          </li>
          <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
            news
          </li>
          <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="700">
            contact
          </li>
          <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="900">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaBehance />
          </li>
        </Menu>
      </Container>
    </>
  );
};

export default MobileMenu;

const Container = styled.div`
  transition: all 0.3s ease-in-out;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #05599c;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: ${({ show }) => (show ? "95%" : "0")};
  top: ${({ show }) => (show ? "0%" : "-100%")};
  z-index: 999;
  padding-bottom: 7rem;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  li {
    color: #fff;
    font-size: 6rem;
    text-transform: capitalize;

    &:last-child {
      padding-top: 5rem;
      display: flex;
      gap: 2rem;
      font-size: 4rem;
    }
  }

  // @media (min-width: 1920px) {
  //   li {
  //     font-size: 6rem;

  //     &:last-child {
  //       font-size: 6rem;
  //       padding-top: 8rem;
  //     }
  //   }
  // }
`;
