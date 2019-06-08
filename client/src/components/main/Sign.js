import React from 'react';
import styled from "styled-components";
import SignIn from "../sign/SignIn";
import SignUp from "../sign/SignUp";

const Sign = (props) => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 100vh;
    & > div {
      flex: 1;
    }
  `;

  const LeftSide = styled.div`
    background: linear-gradient(20deg, #5A55AA, #242348);
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: ${props => props.theme.whiteColor};
    &::after {
      content: '';
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

  const RightSide = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      <LeftSide>
        {props.location.pathname === "/signIn" && <div>
          <p>Meet and connect with other professionals and
            like-minded individuals from all over the world.
          </p>
          <p>Expand your network--one chatroom at a time.</p>
        </div>}
      </LeftSide>
      <RightSide>
        {props.location.pathname === "/signIn" ? <SignIn/> : <SignUp/>}
      </RightSide>
    </Container>
  );
};

export default Sign;
