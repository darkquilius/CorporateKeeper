import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderStyles>
      <header>
        <h1>Corporate Keeper</h1>
        {location !== "/" && (
          <button>
            <Link className="link" to={"/"}>
              <span>Back</span>
            </Link>
          </button>
        )}
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
    background-color: #6aabd2;
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

  .link {
    background-color: #385e72;
    text-decoration: none;
  }

  a:hover,
  a:active {
    background-color: #aeb6bd;
  }

  span {
    color: white;
  }

  button {
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 38px;
  }
`;

export default Header;
