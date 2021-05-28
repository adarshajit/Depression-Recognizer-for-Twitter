import styled from "styled-components";
import { AiOutlineUser as User } from "react-icons/ai";
import { FaSortAlphaDown as Keywords } from "react-icons/fa";
import { RiQuillPenFill as Quill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(
    179.4deg,
    #fff 0.5%,
    rgb(217, 244, 255) 100%
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
export const H1 = styled.h1`
  align-self: center;
  margin-top: 120px;
  font-size: 50px;
  font-weight: 700;
  font-size: 72px;
  color: #1da1f2;

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
  align-self: center;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;

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
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    border: 3px solid #1da1f2;
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
  fill: #1da1f2;

  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;

export const KeyIcon = styled(Keywords)`
  margin: 60px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #1da1f2;

  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;

export const QuillIcon = styled(Quill)`
  margin: 60px 0 40px 0;
  align-self: center;
  font-size: 70px;
  fill: #1da1f2;

  @media screen and (max-width: 768px) {
    margin: 30px 10px 0 40px;
    font-size: 50px;
  }
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  align-self: center;
  @media screen and (max-width: 768px) {
    margin: 25px 0 0 30px;
    font-size: 18px;
  }
`;

export const LinkB = styled(Link)`
  text-decoration: none;
  color: #000;
`;
