import styled from "styled-components";

export const PageArea = styled.div``;
export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: #ccc;
  padding: 20px, 0px;

  .searchBox {
    background-color: #98bb3c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        font-size: 15px;
        color: black;
        outline: 0;
        margin-right: 20px;
      }
      input {
        flex: 1;
        padding: 0 10px;
      }
      select {
        width: 100px;
      }
      button {
        background-color: #49aeef;
        font-size: 15;
        border: 0;
        border-radius: 5px;
        color: #fff;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }
`;
