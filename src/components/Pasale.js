import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaViber } from "react-icons/fa";

const Chat = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container data-aos="fade-up" data-aos-duration="1500">
        <Column1>
          <h2 data-aos="fade-up" data-aos-duration="2000">
            Machhu Pasale
          </h2>
          <div>
            <p data-aos="fade-up" data-aos-duration="2000">
              We’re more than happy to serve you what you need. Go to our social
              media platforms, order and get your order delivered within 24
              hours.
            </p>
            {/* <img
              src="https://www.helloweb.co.uk/wp-content/themes/helloweb/assets/img/button-y.svg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
            /> */}
            <SocialIcons>
              <a
                href="https://www.facebook.com/Machhu.Pasale"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook style={{ color: "#3b5998" }} />
              </a>
              <a
                href="https://wa.me/9779840012748"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  style={{
                    borderRadius: "10px",
                    color: "#fff",
                    background:
                      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                  }}
                />
              </a>
              <a
                href="https://wa.me/9779840012748"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp style={{ color: "#25d366" }} />
              </a>
              <a
                href="viber://chat?number=9779840012748"
                target="_blank"
                rel="noreferrer"
              >
                <FaViber style={{ color: "#59267c" }} />
              </a>
            </SocialIcons>
          </div>
        </Column1>
        <Column2>
          <img
            src="images/machhu-pasale.svg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </Column2>
      </Container>
    </>
  );
};

export default Chat;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(212, 212, 212, 0.5);
  padding: 10rem;
  gap: 8rem;

  @media (max-width: 768px) {
    padding: 5rem 3rem;
    flex-direction: column;
    gap: 3rem;
  }
`;

const Column1 = styled.div`
  flex: 2;

  h2 {
    color: #f65058;
  }
  p {
    color: #000;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      padding: 2rem 0;
    }
  }

  // @media (min-width: 1920px) {
  //   div {
  //     img {
  //       width: 13%;
  //     }
  //   }
  // }

  @media (max-width: 768px) {
    order: 2;
    div {
      flex-direction: column;

      img {
        width: 7%;
      }
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 6rem;
    }
    div {
      p {
        font-size: 2.5rem;
      }
      img {
        width: 15%;
      }
    }
  }
`;

const Column2 = styled.div`
  flex: 1;

  @media (max-width: 800px) {
    order: 1;
    align-self: flex-start;
    img {
      width: 100%;
    }
  }
`;

const SocialIcons = styled.div`
  color: #000;
  font-size: 3rem;
  flex-direction: row !important;

  a {
    transition: 0.4s;
    &:hover {
      transform: translateY(-10%);
    }
  }

  // @media (min-width: 1920px) {
  //   font-size: 5rem;
  // }
`;
