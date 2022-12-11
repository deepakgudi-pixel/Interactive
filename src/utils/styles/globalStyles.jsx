import { createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import ItalianaRegular from "../../assets/fonts/Italiana-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: Italiana;
    font-style: normal;
    font-weight: 400;
    src: url(${ItalianaRegular});
  }

body {
    line-height: 1;
    font-family: Italiana;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #CFD2CF;
    }

    body::-webkit-scrollbar{
      display: none;
    }

    html, body {
    // cursor: none;
    }
    * {
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    }
    img {
    display: block;
    width: 100%;
    height: auto;
    }

    h1{
        font-size: 5rem;
    }
   `;


