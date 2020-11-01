import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  body, input, button, textarea {
    font-family: Calibri, sans-serif;
    font-size: 28px;
    line-height: 2.0rem;
  }

  h1 {
    font-size: 3em;
    line-height: 1em;
    margin-bottom: 1em;
  }

  button {
    cursor: pointer;
  }

`
