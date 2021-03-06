import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #ffff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }
  .logo {
    flex: 1;
    display: flex;
    align-items: center;

    .logo-img {
      width: 80px;
    }
  }

  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      a {
        text-decoration: none;
      }
    }
    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;
      a,
      button {
        border: 0;
        background: none;
        outline: none;
        cursor: pointer;
        color: black;
        font-size: 14;
        &:hover {
          color: #999;
        }
        &.btn {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;

          &:hover {
            background-color: #e57706;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    height: auto;

    .container {
      flex-direction: column;
    }
    .logo {
      justify-content: center;
      margin: 20px 0px;
    }

    nav,
    ul {
      flex-direction: column;
      height: auto;
    }
    nav,
    li {
      margin: 10px 20px;
    }
  }
`;
