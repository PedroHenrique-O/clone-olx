import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: #ccc;

  padding: 20px, 0px;

  .searchBox {
    margin-top: 20px;
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

  .categoryList {
    display: flex;

    flex-wrap: wrap;
    margin-top: 20px;
    .categoryItem {
      width: 25%;
      display: flex;
      align-items: center;
      height: 50px;
      text-decoration: none;
      margin-bottom: 10px;
      &:hover {
        color: #999;
      }
      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    .searchBox {
      form {
        flex-direction: column;

        input {
          padding: 10px;
          margin-right: 0;
          margin-bottom: 10px;
        }

        select {
          width: 100%;
          margin-bottom: 10px;
        }
      }

      .categoryList .categoryItem {
        width: 50%;
        padding: 10px;
        //flex-direction: column;
      }
    }
  }
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;

    //display: flex;
    flex-wrap: wrap;
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    & {
      margin: 10px;
    }
    h2 {
    }
    .list {
      width: 100%;
      //flex-wrap: none;
    }
  }
`;
