import styled from "styled-components";
import * as Fa from "react-icons/fa";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeIcon = styled(Fa.FaHome)`
  position: absolute;
  margin: 20px;

  &:hover {
    fill: #239afb;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #062080;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  max-width: 550px;
  max-height: 550px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin: 40px 0 40px 0;
  }
`;

export const P = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 350px;
  height: 46px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 350px;
  height: 46px;
  background-color: #239afb;
  border-radius: 20px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

export const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
