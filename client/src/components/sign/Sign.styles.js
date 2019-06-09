import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 100vh;
    & > div {
      flex: 1;
    }
  `;

export const LeftSide = styled.div`
    background: linear-gradient(20deg, #5a55aa, #242348);
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: ${props => props.theme.whiteColor};
    &::after {
      content: "";
      background: url("images/sign_bg3.png") no-repeat bottom center;
      background-size: cover;
      width: 100%;
      height: 70%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    div {
      margin-top: 3rem;
    }
    p {
      text-align: left;
      max-width: 570px;
      margin: 0 auto;
      padding: 0 0.5rem;
      font-size: 1.3rem;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

export const RightSide = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
  `;