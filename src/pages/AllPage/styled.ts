import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .leftS {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10px 0px;
    }
    input,
    select {
      width: 100%;
      height: 40px;
      border: 2px solid #9bbb3c;
      border-radius: 5px;
      outline: 0;
      font-size: 15px;
      color: #000;
      padding: 10px;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .categoryItem {
      display: flex;
      align-items: center;
      border-radius: 5px;
      color: #000;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
      }
    }
    .categoryItem:hover,
    .categoryItem.active {
      background-color: #9bb83c;
      color: #fff;
    }
  }
  .rightS {
    flex: 1;
    //margin-top: 0px;
    //flex-wrap: 33%;
    font-size: 18px;
    h2 {
      margin-top: 0px;
    }
    .listWarning {
      padding: 30px;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      width: 33%;
      /* .q {
        width: 33%;
      } */

      .container--list {
        width: 33%;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      //margin: 10px, 0;

      .pageItem {
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          border: 1px solid #999;
        }
      }
      .active {
        background-color: #ccc;
      }
      //margin-right: 3px;
    }
  }
  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
    .leftS {
      width: auto;
      margin: 10px;

      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
        }
      }
    }
    .rightS {
      margin: 10px;

      .list {
        width: 150%;
      }
    }
  }
`;
