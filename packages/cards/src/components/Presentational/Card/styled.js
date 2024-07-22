import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid #e4e8ed;
  height: 620px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  p {
    font-weight: bold;
  }

  h5 {
    margin: 0px;
  }
`;
