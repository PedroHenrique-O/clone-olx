import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 1px 3px 6px #999;
    padding-bottom: 15px;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 18px;
      }
      .area--input {
        flex: 1;
        input,
        select,
        textarea {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          outline: 0;
          transition: all ease 0.6s;
          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }
        text-area {
          resize: none;
          height: 150px;
        }
        .check-box {
          width: min-content;
        }
        span {
          font-weight: bold;
          padding-left: 3px;
        }
      }

      button {
        background-color: #0089ff;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        cursor: pointer;

        color: #fff;
        border-radius: 4px;
        font-size: 15px;
        cursor: pointer;
        &:hover {
          background-color: #006fce;
        }
      }
    }
  }
  @media (max-width: 600px) {
    form {
      .area {
        flex-direction: column;

        .area--title {
          width: 100%;
          text-align: left;
          margin-bottom: 10px;
        }
        .area--input {
          width: 100%;
          button {
            width: 100%;
            padding: 10px;
          }
        }
      }
    }
  }
`;
