import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaFacebook, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container>
        <LogoContainer data-aos="fade-up" data-aos-duration="1500">
          <span>Machhu.</span>
        </LogoContainer>
        <AddressContainer
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <p>machhu.</p>
          <ul>
            <li>GaneshTol Imadol, </li>
            <li>MahaLaxmi - 01, Lalitpur</li>
            <li>Bagmati Province, Nepal</li>
          </ul>
        </AddressContainer>
        <MailContainer
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <ul>
            <li>+977-9843228141, 9823511425</li>
            <li>machhuhs@gmail.com</li>
            <li>machhumarketing@gmail.com</li>
            <li>
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
              <FaBehance />
            </li>
          </ul>
        </MailContainer>
        <NewsLetter
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <p>Newsletter</p>
          <p>Stay up to date with our latest news and blogs.</p>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit" to="mailto: avishesh09401kr@gmail.com">
              Submit
            </button>
          </form>
        </NewsLetter>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  background: #f56058;
  display: flex;
  align-items: center;
  padding: 8rem 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  // @media (min-width: 1920px) {
  //   padding 10rem;
  // }

  @media (max-width: 768px) {
    padding: 8rem 5rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 3rem;
  }
`;

const LogoContainer = styled.div`
  flex: 0.5;
  display: flex;

  span {
    background-color: #000;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    color: #fff;
    font-family: "Gilroy Black";
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // @media (min-width: 1920px) {
  //   span {
  //     width: 20rem;
  //     height: 20rem;
  //     font-size: 4.5rem;
  //   }
  // }
`;

const AddressContainer = styled.div`
  flex: 1;

  ul {
    list-style-type: none;
    padding-top: 2rem;

    li {
      font-family: "Gilroy Regular";
    }
  }

  p {
    font-size: 1.6rem;
    font-family: "Gilroy Bold";
  }

  // @media (min-width: 1920px) {
  //   ul {
  //     li {
  //       font-size: 3.5rem;
  //     }
  //   }

  //   p {
  //     font-size: 3.5rem;
  //   }
  // }
`;

const MailContainer = styled.div`
  flex: 1;

  ul {
    list-style-type: none;

    li {
      font-family: "Gilroy Regular";
    }

    li:nth-child(2) {
      margin: 0.75rem 0;
    }

    li:nth-child(3) {
      margin-bottom: 0.75rem;
    }

    li:last-child {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.8rem;
      color: #000;
    }
  }

  // @media (min-width: 1920px) {
  //   ul {
  //     li {
  //       font-size: 3.5rem;
  //     }

  //     li:last-child {
  //       font-size: 3.5rem;
  //       gap: 2rem;
  //     }
  //   }
  // }
`;

const NewsLetter = styled.div`
  flex: 2;

  p {
    font-size: 1.7rem;
    font-family: "Gilroy Bold";
  }

  p:nth-child(2) {
    font-family: "Gilroy Regular";
    padding: 1.5rem 0;
  }

  form {
    display: flex;
    align-items: center;
    height: 4rem;
    border-radius: 3rem;
    overflow: hidden;

    input {
      flex: 3;
      height: 100%;
      border: 0;
      padding: 2rem;
      font-size: 1.6rem;

      &::placeholder {
        color: #000;
      }

      &:focus {
        outline: none;
      }
    }
    button {
      flex: 1;
      height: 100%;
      border: 0;
      background-color: #000;
      color: #fff;
      font-size: 1.6rem;
    }
  }

  // @media (min-width: 1920px) {
  //   p {
  //     font-size: 3.5rem;
  //   }

  //   form {
  //     height: 8rem;
  //     border-radius: 6rem;

  //     input {
  //       padding: 4rem;
  //     }

  //     input,
  //     button {
  //       font-size: 3.5rem;
  //     }
  //   }
  // }

  @media (max-width: 1024px) {
    form {
      input,
      button {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 3rem;

    form {
      input,
      button {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 0;
    p:nth-child(2) {
      line-height: 2.5rem;
      padding-top: 0;
    }
  }

  @media (max-width: 400px) {
    form {
      height: 3rem;

      input,
      button {
        font-size: 1.3rem;
      }
    }
  }
`;
