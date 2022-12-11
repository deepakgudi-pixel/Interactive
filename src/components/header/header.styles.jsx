import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
  padding: 0 4vw;

  .header__outer {
    max-width: 1417px;
    margin: 0 auto;
    .header__inner {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        width: 30px;
        fill: #000;
      }
    }
  }
  .header__hamburger {
    cursor: pointer;
    display: block;
    span {
      height: 3px;
      width: 30px;
      margin: 6px;
      display: block;
      background: #000;
    }
  }
`;
