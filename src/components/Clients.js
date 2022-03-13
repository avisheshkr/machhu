import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container>
        <ColumnContainer>
          <Column1>
            <img
              src="images/Client.svg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </Column1>
          <Column2>
            <h2 data-aos="fade-up" data-aos-duration="1500">
              Our clients…
            </h2>

            <div>
              <p data-aos="fade-up" data-aos-duration="1500">
                We are happy and grateful to work with these amazing brands.
              </p>
              {/* <img
                src="https://www.helloweb.co.uk/wp-content/themes/helloweb/assets/img/button-y.svg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
              /> */}
            </div>
          </Column2>
        </ColumnContainer>

        <LogoContainer>
          <img src="images/Khelpati.png" alt="" />
          <img src="images/Nirmal-logo.png" alt="" />
          <img src="images/Sashenkaenterprises.jpg" alt="" />
          <img src="images/Harekdin.png" alt="" />
          <img src="images/homeforspecial.jpg" alt="" />
          <img src="images/aaronce.jpg" alt="" />
        </LogoContainer>
      </Container>
    </>
  );
};

export default Clients;

const Container = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // @media (min-width: 1900px) {
  //   padding: 20rem 0;
  // }

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 800px) {
    padding-top: 10rem;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 10rem;
  width: 100%;

  @media (max-width: 1300px) {
    margin-top: 25rem;
  }

  @media (max-width: 1200px) {
    margin-top: 40rem;
  }

  @media (max-width: 1024px) {
    margin-top: 10rem;
  }

  @media (max-width: 900px) {
    padding: 0 5rem;
  }

  @media (max-width: 850px) {
    padding: 0;
    flex-direction: column;
    gap: 2rem;
    margin: 0;
  }
`;

const Column1 = styled.div`
  flex: 1;

  @media (max-width: 850px) {
    width: 100%;
    padding: 0 5rem;
  }
`;

const Column2 = styled.div`
  padding-top: 10rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1rem 0;
  }

  div {
    display: flex;

    align-items: center;
    gap: 2rem;

    p {
      line-height: 3.5rem;
    }

    img {
      width: 4%;
      height: auto;
      align-self: center;
    }
  }

  // @media (min-width: 1920px) {
  //   div {
  //     p {
  //       line-height: 5.5rem;
  //     }
  //     img {
  //       width: 7%;
  //     }
  //   }
  // }

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

    h2 {
      font-size: 6rem;
    }

    div {
      p {
        line-height: 3.5rem;
        padding: 2rem 0;
        font-size: 2.5rem;
      }

      img {
        width: 15%;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin: 10rem 3rem 10rem 3rem;
  flex-wrap: wrap;

  img {
    max-width: 15rem;
    width: 100%;
    height: auto;
  }

  // @media (min-width: 1920px) {
  //   img {
  //     max-width: 30rem;
  //   }
  // }

  @media (max-width: 800px) {
    margin: 10rem 3rem;

    justify-content: space-between;

    img {
      max-width: 13rem;
    }
  }

  @media (max-width: 400px) {
    gap: 3rem;

    img {
      padding: 0 7rem;
      max-width: 100%;
    }
  }
`;
