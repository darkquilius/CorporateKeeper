import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyles>
      <header>
        <button>
          <Link to={"/"}>Home</Link>
        </button>
        <h1>Corporate Keeper</h1>
      </header>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    height: 900px;
  }
  header {
    text-align: center;
    width: 100%;
    height: auto;
    background-color: lightblue;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 85% 85% / 30%;
  }

  h1 {
    color: linen;
    font-family: "Times New Roman", Times, serif, cursive;
    font-size: 80px;
    margin-bottom: 30px;
  }
  button {
    float: left;
    font-size: 38px;
    vertical-align: middle;
    line-height: 38px;
  }
`;

export default Header;
