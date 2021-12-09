import styled from "styled-components";

export const Item = styled.div`
  a {
    /* display: block;
    width: 25%;
    border: 1px solid #fff;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all ease 0.5s; */

    display: block;
    border: 1px solid #fff;
    padding: 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #eee;
      border: 1px solid #ccc;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }
    .itemName {
      font-weight: bold;
    }
    /* .container--list {
      width: 33%;
    } */
  }
`;

// export const PageArea = styled.div`
// h2{

// }

// `;
