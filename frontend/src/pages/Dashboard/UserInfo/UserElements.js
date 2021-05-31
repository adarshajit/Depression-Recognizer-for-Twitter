import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 10px;
  grid-gap: 40px;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const AccountSummary = styled.div`
  height: 400px;
  background-color: #e1e8ed;
  border-radius: 20px;
  /* box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37); */
  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 10px 0 0 10px;
`;

// export const Data = styled.div`
//   border-radius: 10px;
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   @media screen and (min-width: 1500px) {
//     height: 650px;
//   }
// `;

// export const Number = styled.div`
//   background: #e6f4ff;
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   border-radius: 20px;

//   margin-bottom: 10px;
//   height: 195px;

//   @media screen and (max-width: 768px) {
//     height: 140px;
//   }

//   @media screen and (min-width: 1500px) {
//     height: 320px;
//   }
// `;

export const RecentTweets = styled.div`
  height: 400px;
  background: rgba(74, 144, 226, 0.5);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  /* box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37); */
  border-radius: 20px;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const OtherData = styled.div`
  margin: 10px;

  grid-column: 1/4;
  border-radius: 10px;
  max-height: 800px;
  padding: 20px 0 20px 0;

  @media screen and (min-width: 1500px) {
    height: 500px;
    flex-direction: row;
    padding: 80px 0 20px 0;
  }
`;

export const P2 = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-self: center;
`;

export const Box = styled.div`
  width: 250px;
  height: 100px;
  display: grid;
  place-items: center;
  background: #fff;
  /* box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 130px;
    margin: 40px 0 20px 0;
    align-self: center;
  }
`;

export const OtherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* background: #e6f4ff; */
  background: #d4ecff;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 20px;
`;

export const Sub = styled.p`
  font-size: 18px;
  font-weight: 600;
  align-self: center;
`;
