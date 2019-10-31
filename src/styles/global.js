import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(#01639C, #80A7D2);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Arial, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0px auto;
    padding: 0px 20px 50px
  }

  button {
    cursor: pointer;
  }
`;
