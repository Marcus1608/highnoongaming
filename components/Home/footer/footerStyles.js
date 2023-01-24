import styled from "styled-components";
import { grey, opacGrey40, opacGrey75, red } from "../../ui/colors";

const FooterContainer = styled.div`
  position: relative;
  height: 35vh;
  width: 100%;
  background: ${red};

  .sponsors-container {
    position: relative;
    height: 30%;
    width: 100%;
    display: flex;
    gap: 25px;

    & :is(div) {
      position: relative;
      left: 1%;
      top: 10%;
      height: 60%;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${grey};
    }
  }

  .search-box--container {
    position: absolute;
    top: 30%;
    left: 1%;
    height: 50%;
    width: 30%;
    /* border: 1px solid ${grey}; */

    display: flex;
    flex-flow: column;
    gap: 8px;

    .search-btn {
      height: 48px;
      width: 150px;
      background: ${opacGrey75};
      border-radius: 2;
      box-shadow: 2px 2px 6px ${opacGrey40};
      letter-spacing: 1.3px;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #search-box {
      height: 48px;
      width: 300px;
      border: 2px solid ${grey};
      background: transparent;
      outline: none;
      color: ${grey};
      font-size: 1.1em;
    }
  }

  .copyright-container {
    position: absolute;
    bottom: 0;
    left: 1%;
    height: 20%;
    width: 30%;
    display: flex;
    align-items: center;
  }

  .footer-links {
    position: absolute;
    height: 70%;
    width: 70%;
    bottom: 0;
    right: 0;
    /* border: 2px solid ${grey}; */

    .footer-ul {
      display: flex;

      li {
        padding: 10px 0;

        ul {
          position: relative;
          top: 20px;
          width: 200px;
          margin: 0 15px;
          /* border: 1px solid black; */

          li {
            color: ${grey};
          }
        }
      }
    }
  }
`;

export { FooterContainer };
