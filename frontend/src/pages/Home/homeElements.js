import styled from "styled-components";
import { AiOutlineUser as User } from "react-icons/ai";
import { RiQuillPenFill as Quill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  height: 100%;

  background-image: radial-gradient(
    circle,
    #ffffff,
    #edf0ff,
    #d4e3ff,
    #b1d7ff,
    #83ceff
  );
`;

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 130px;
  transform: translate(-50%, -50%);
`;

export const Img2 = styled.img`
  position: absolute;
  top: 80%;
  left: 83%;
  width: 270px;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    top: 90%;
    width: 100px;
  }
`;

export const Img3 = styled.img`
  position: absolute;
  top: 15%;
  left: 40%;
  width: 50px;
  transform: translate(-50%, -50%);
`;

export const Img4 = styled.img`
  position: absolute;
  top: 40%;
  left: 70%;
  width: 60px;
  transform: translate(-50%, -50%);
`;
export const H1 = styled.h1`
  align-self: center;
  position: relative;
  font-size: 50px;
  font-weight: 700;
  font-size: 72px;
  color: #1565c0;
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
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin: 5px 5px 50px 5px;
  }
`;

export const BoxGrid = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 40px;
  align-self: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 380px;
  height: 250px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-out;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    transition: 0.3s all ease-out;
    transform: translateY(-8px);
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 200px;
  }

  @media screen and (max-width: 376px) {
    width: 270px;
    height: 200px;
  }
`;

export const BoxItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UserIcon = styled(User)`
  margin: 50px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #25a1f2;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: 40px;
  }
`;

export const QuillIcon = styled(Quill)`
  margin: 50px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #25a1f2;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: 40px;
  }
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #00447a;
  width: 100%;
  @media screen and (max-width: 768px) {
    /* margin: 25px 0 0 30px; */
    font-size: 18px;
  }
`;

export const LinkB = styled(Link)`
  text-decoration: none;
  color: #000;
`;
