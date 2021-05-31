import styled from "styled-components";
import { AiOutlineUser as User } from "react-icons/ai";
import { FaSortAlphaDown as Keywords } from "react-icons/fa";
import { RiQuillPenFill as Quill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  height: 100%;
  background-image: radial-gradient(
    circle,
    #73b4ff,
    #5fa3f8,
    #4d91f0,
    #3c80e8,
    #2e6ede
  );
`;

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const Img2 = styled.img`
  position: absolute;
  top: 80%;
  left: 80%;
  transform: translate(-50%, -50%);
`;

export const Img3 = styled.img`
  position: absolute;
  top: 20%;
  left: 80%;
  transform: translate(-50%, -50%);
`;
export const H1 = styled.h1`
  align-self: center;
  position: relative;
  margin-top: 120px;
  font-size: 50px;
  font-weight: 700;
  font-size: 72px;
  color: #fff;
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

  @media screen and (max-width: 300px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const P = styled.p`
  position: relative;
  align-self: center;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin: 5px 5px 50px 5px;
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

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    border: 3px solid #1da1f2;
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 110px;
  }
`;

export const BoxItems = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const UserIcon = styled(User)`
  margin: 60px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #00447a;
  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;

export const KeyIcon = styled(Keywords)`
  margin: 60px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #00447a;

  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;

export const QuillIcon = styled(Quill)`
  margin: 60px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #00447a;
  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  align-self: center;
  color: #00447a;
  @media screen and (max-width: 768px) {
    margin: 25px 0 0 30px;
    font-size: 18px;
  }
`;

export const LinkB = styled(Link)`
  text-decoration: none;
  color: #000;
`;
