import React from "react";
import styled from "styled-components";

const EmergencyChild = ({ imageUrl, title, paragraph }) => {
  return (
    <>
      <Container>
        <img src={imageUrl} alt="" />
        <h3>{title}</h3>
        <hr />
        <p>{paragraph}</p>
      </Container>
    </>
  );
};

export default EmergencyChild;

const Container = styled.div`
  max-width: 35rem;
  box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.1);
  padding: 5rem 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.4s all;

  &:hover {
    transform: translateY(-3%);
  }

  img {
    width: 20rem;
  }

  h3 {
    color: #00559c;
    text-transform: uppercase;
    font-size: 2.8rem;
    text-align: center;
  }

  hr {
    width: 10rem;
    border: none;
    border-bottom: 5px solid #f56058;
    border-radius: 10px;
  }

  p {
    font-size: 1.8rem;
    line-height: 3rem;
    padding: 2rem 0 0 0;
    text-align: center;
  }
`;
