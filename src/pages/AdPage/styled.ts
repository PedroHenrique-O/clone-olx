import styled from "styled-components";
export const Fake = styled.div<{ height: number }>`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
  padding: 20px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px, 0px, 4px #999;
    margin-bottom: 20px;
  }
  .box--padding {
    padding: 10px;
  }
  .box-images {
    width: 320px;
    height: 320px;
    margin-right: 20px;

    .each-slide img {
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      height: 320px;
    }
  }

  .leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
      display: flex;
    }
    .box-images {
    }
    .box-information {
      flex: 1;
      .item-name {
        margin: 20px;
        h2 {
          margin-top: 20px;
          margin: 0px;
        }
        small {
          color: grey;
        }
      }
      .item-Description {
        small {
          color: grey;
        }
      }
    }
  }
  .rightSide {
    width: 250px;
    .price span {
      color: #0000ff;
      display: block;
      font-size: 27px;
      font-weight: bold;
    }

    .seller-contact {
      background-color: #0000ff;
      color: #fff;
      height: 30px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      text-decoration: none;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 5px;
    }

    .createdby {
      strong {
        display: block;
      }
      small {
        display: block;
        color: #999;
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }

    .leftSide {
      margin-right: 0;
      .box {
        margin: auto;
        width: 320px;

        .box-information {
          flex-direction: column;
          .item-Description {
            padding: 20px;
          }
        }
        flex-direction: column;
      }
    }
    .rightSide {
      width: auto;
      margin-top: 20px;
      .box {
        width: 320px;
        margin: auto;
      }
      .seller-contact {
        width: 320px;
        margin: 20px auto;
      }
    }
  }
`;

export const OthersArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    width: 25%;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    & {
      margin: 10px;

      .list {
        width: 50%;
      }
    }
  }
`;

export const BreadCrumb = styled.div`
  font-size: 13px;
  margin-top: 20px;

  a {
    display: inline-block;
    margin: 0px 5px;
    text-decoration: underline;
    color: #000;
  }
  @media (max-width: 600px) {
    margin: 20px;
  }
`;
