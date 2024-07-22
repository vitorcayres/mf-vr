import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  color: #fff;
  background-color: red;
  border-radius: 50%;
  line-height: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  position: relative;
  right: 20px;
  bottom: 5px;
`;

export const DrawerContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow-x: auto;
  padding: 30px 20px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #e4e8ed;
`;

export const CloseContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const IconClose = styled.div`
  cursor: pointer;
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
  padding: 0;
  height: calc(100% - 77px);
  overflow: scroll;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  border-radius: 10px;
  border: 1px solid green;
  padding: 10px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    p {
      font-size: 12px;
    }
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > p {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const EmptyData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
