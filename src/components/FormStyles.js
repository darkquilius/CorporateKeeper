import styled from "styled-components";

export const StyledForm = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: "DM Sans", sans-serif;
    line-height: 1.5;
    background-color: #f1f3fb;
    padding: 0 2rem;
  }

  .card {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(#999, 0.25);
    padding: 0.75rem;
    h1{
      text-align: center;
    }
  }

  .inputGroup {
    width: 100%;
    em{
      padding-left: 180px;
      color: red;
      font-size: 18px;
    }
  }
  .inputLabel {
    width: 40%;
    text-align: left;
  }
  .inputField {
    width: 50%;
    text-align: right;
    float: right;
    margin-top: 17px;
    white-space: pre;
  }
`;
