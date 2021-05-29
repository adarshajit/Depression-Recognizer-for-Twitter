import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  max-width: 350px;
  max-height: 500px;

  @media screen and (max-width: 1024px) {
    margin: 40px 0 40px 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const P = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 350px;
  height: 46px;
  border-radius: 5px;
  margin-bottom: 20px;
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
