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
  background-color: #002a4a;
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

export const P = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 350px;
  height: 260px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-top: 10px;

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
