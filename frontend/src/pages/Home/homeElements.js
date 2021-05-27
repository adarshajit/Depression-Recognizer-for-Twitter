import styled from "styled-components";
import { AiOutlineUser as User } from "react-icons/ai";
import { FaSortAlphaDown as Keywords } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  align-self: center;

  font-size: 55px;
  font-weight: 700;
  font-size: 72px;
  color: #1da1f2;

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

  @media screen and (max-width: 768px) {
    font-size: 18px;
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
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);

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
