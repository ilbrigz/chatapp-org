import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Container, RightSide, LeftSide } from "./Sign.styles";

const Sign = props => {
  return (
    <Container>
      <LeftSide>
        {props.location.pathname === "/signIn" && (
          <div>
            <p>
              Meet and connect with other professionals and like-minded
              individuals from all over the world.
            </p>
            <p>Expand your network--one chatroom at a time.</p>
          </div>
        )}
      </LeftSide>
      <RightSide>
        {props.location.pathname === "/signIn" ? (
          <SignIn {...props} />
        ) : (
          <SignUp {...props} />
        )}
      </RightSide>
    </Container>
  );
};

export default Sign;
