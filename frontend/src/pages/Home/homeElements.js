import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    transform: translate(-50%, -30%);
  }
`;
export const H1 = styled.h1`
  align-self: center;
  font-size: 55px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    white-space: nowrap;
  }
`;

export const P = styled.p`
  align-self: center;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
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
  background-color: #99ebff;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
