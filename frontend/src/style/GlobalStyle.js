import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  #root {
    width: 100%;
    height: 100%;
  } 

 * {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    padding-top: 50px;
  }

  html {
  width: 100%;
  height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }


  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  ol li {
    list-style: none;
  }

`;
