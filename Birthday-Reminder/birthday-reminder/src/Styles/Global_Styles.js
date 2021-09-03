import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: pink;
    max-width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
    font-size: 25px;
    font-weight: bold;
}

h2, h3 {
    font-size: 16px;
    font-weight: bold;
}

h3 {
    font-weight: 500;
}

`
export default GlobalStyle;