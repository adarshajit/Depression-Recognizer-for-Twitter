import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const P1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const TwitterHandle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  height: 100px;
  width: 50%;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-end;
  justify-content: center;
  height: 100px;
  width: 50%;

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

// export const MainWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;

//   @media screen and (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     grid-gap: 10px;
//   }
// `;

// export const AccountInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 600px;
//   height: 600px;
//   background-color: #99ebff;
//   border-radius: 10px;

//   @media screen and (max-width: 768px) {
//     width: 500px;
//   }

//   @media screen and (max-width: 450px) {
//     width: 360px;
//   }
//   @media screen and (max-width: 359px) {
//     width: 280px;
//   }
// `;

// export const Details = styled.div`
//   margin: 20px 0 0 0;
//   width: 500px;
//   height: 450px;
//   background-color: #fff;
//   align-self: center;
//   border-radius: 10px;

//   @media screen and (max-width: 768px) {
//     width: 470px;
//   }

//   @media screen and (max-width: 450px) {
//     width: 300px;
//   }

//   @media screen and (max-width: 360px) {
//     width: 250px;
//   }
// `;

// export const TweetWrapper = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   place-items: center;
//   grid-gap: 10px;
// `;

// export const RecentTweets = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 600px;
//   height: 300px;
//   background-color: #99ebff;
//   border-radius: 10px;
// `;

// export const Analytics = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 600px;
//   height: 270px;
//   background-color: #99ebff;
//   border-radius: 10px;
// `;
