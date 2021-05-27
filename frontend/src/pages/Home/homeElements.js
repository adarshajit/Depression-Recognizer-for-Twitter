import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 700px;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  align-self: center;

  font-size: 55px;
  font-weight: 800;
  font-size: 72px;

  background: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const P = styled.p`
  align-self: center;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    white-space: nowrap;
    margin-bottom: 20px;
  }
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  align-self: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 270px;
  height: 270px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 35px 45px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 201px;
    height: 201px;
  }
`;
