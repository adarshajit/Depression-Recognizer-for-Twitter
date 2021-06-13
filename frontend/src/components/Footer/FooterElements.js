import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 230px 15px 15px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const P = styled.p`
  font-size: 16px;
`;

export const Source = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15px 0 0;
  align-items: center;
`;

export const P1 = styled.p`
  font-size: 16px;
  margin: 0 5px 0 0;
`;

export const A = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #25a0f2;
    transition: 0.3s ease-in-out;
  }
`;
