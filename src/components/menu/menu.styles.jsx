import styled from "styled-components";

const StyledContentsContainer = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .content__wrapper {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .project__image--outer {
    pointer-events: none;
    overflow: hidden;
    width: 22vw;
    height: 32vw;
    position: absolute;
    left: 50%;
    top: 20vh;
    z-index: 1;
    // background-color: #000;
    border-radius: 300px;

    .project__image--inner {
      position: absolute;
      opacity: 0.8;
      top: -10%;
      left: 0;
      width: 100%;
      height: 115%;
      background-size: cover;
    }
  }
`;

const StyledBackground = styled.aside`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
will-change: background-color;
background-color: #b5b5b2;
z-index: -1;

`;

export {StyledContentsContainer, StyledBackground};