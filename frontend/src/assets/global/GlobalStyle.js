import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
