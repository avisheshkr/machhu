import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialization = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container>
        <QuoteImage
          src="images/machhu.svg"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1500"
        />
        <ColumnContainer>
          <DigitalImage
            src="images/digital.svg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1500"
          />

          <Column2>
            <MobileImage
              src="images/machhu.svg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1500"
            />
            <p data-aos="fade-up" data-aos-duration="1500">
              We are an innovative IT company,
            </p>
            <h2 data-aos="fade-up" data-aos-duration="1500">
              to provide all digital solutions.
            </h2>
            <div>
              <ul data-aos="fade-up" data-aos-duration="1000">
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Social Media Management</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Content Writing</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Creative Designing</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>UI/UX Designing and Website Development</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Mobile App Development (iOS/Android)</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Search Engine Optimization</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Digital Marketing</p>
                </li>
                <li>
                  {" "}
                  <img
                    src="images/arrow.svg"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  />
                  <p>Systems Analysis and Design</p>
                </li>
              </ul>
              {/* <img
                src="images/arrow.svg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
              /> */}
            </div>
          </Column2>
        </ColumnContainer>
      </Container>
    </>
  );
};

export default Specialization;

const Container = styled.div`
  position: relative;
`;

const QuoteImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 15rem;
  position: absolute;
  top: -1rem;
  right: 0;
  margin-right: 10rem;

  @media (min-width: 1500px) {
    right: 10rem;
  }

  @media (max-width: 900px) {
    position: inherit;
    float: right;
    padding-bottom: 2rem;
    margin-right: 5rem;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 15rem;
  display: none;

  @media (max-width: 850px) {
    display: block;
  }

  @media (min-width: 750px) and (max-width: 850px) {
    margin-right: 25rem;
  }

  @media (min-width: 600px) and (max-width: 750px) {
    margin-right: 10rem;
  }
`;

const DigitalImage = styled.img`
  width: 50%;

  @media (max-width: 1200px) {
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 0 5rem;
  }

  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1280px) {
    padding: 12rem 10rem 10rem 10rem;
  }

  @media (max-width: 900px) {
    padding: 0 5rem;
  }

  @media (max-width: 850px) {
    padding: 0;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  img {
    width: 25%;
    height: auto;
    align-self: flex-end;
  }

  h2 {
    margin: 2rem 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      list-style-type: none;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;

        img {
          width: 3rem;
        }
      }
    }

    p {
      font-size: 1.6rem;
      font-family: "Gilroy Regular";
      line-height: 2.5rem;
    }

    img {
      width: 4%;
      height: auto;
      align-self: center;
    }
  }

  @media (min-width: 1920px) {
    div {
      p {
        font-size: 3rem;
        line-height: 4rem;
      }

      img {
        width: 9%;
      }
    }
  }

  // @media (max-width: 1920px) {
  //   div {
  //     img {
  //       width: 7%;
  //     }
  //   }
  // }

  @media (max-width: 1440px) {
    img {
      width: 20%;
    }

    div {
      img {
        width: 7%;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      img {
        width: 10%;
      }
    }
  }

  @media (max-width: 900px) {
    img {
      width: 25%;
    }

    div {
      flex-direction: column;
      align-items: flex-start;
      img {
        align-self: flex-start;
      }
    }
  }

  @media (max-width: 850px) {
    padding: 0 3rem;
    order: 1;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    div {
      img {
        width: 7%;
      }
    }
  }

  @media (max-width: 500px) {
    img {
      width: 40%;
    }

    p {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 6rem;
    }

    div {
      flex-direction: column;

      img {
        align-self: flex-start;
        width: 15%;
      }
    }
  }
`;
