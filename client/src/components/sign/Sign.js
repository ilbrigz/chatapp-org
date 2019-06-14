import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";
import { Container, RightSide, LeftSide } from "./Sign.styles";

const Sign = props => {
  return (
    <Container>
      <Route
        path="/signIn"
        render={() => (
          <>
            <LeftSide bgImage="/images/sign-in.jpg">
              <Route
                path="/signIn"
                render={() => (
                  <div>
                    <p>
                      Meet and connect with other professionals and like-minded
                      individuals from all over the world.
                    </p>
                    <p>Expand your network--one chatroom at a time.</p>
                  </div>
                )}
              />
            </LeftSide>
            <RightSide>
              <SignIn {...props} />
            </RightSide>
          </>
        )}
      />
      <Route
        path="/signUp"
        render={() => (
          <>
            <LeftSide bgImage="/images/sign-up.jpg" />
            <RightSide>
              <SignUp {...props} />
            </RightSide>
          </>
        )}
      />
    </Container>
  );
};

export default Sign;
