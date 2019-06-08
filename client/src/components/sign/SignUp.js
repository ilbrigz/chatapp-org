import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  combineValidators,
  matchesField,
  matchesPattern,
  isRequired,
  hasLengthBetween,
  composeValidators
} from "revalidate";
import MainButton from "../styledComponents/MainButton";
import InputField from "../styledComponents/InputField";

const StyledContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 4rem 0;
  @media screen and (min-width: 800px) {
    min-width: 80%;
  }
`;

const StyledHeader = styled.h2`
  letter-spacing: 4px;
  color: ${props => props.theme.mainColor};
  font-size: 1.8rem;
  margin-top: 0;
`;

const StyledText = styled.p`
  color: ${props => props.theme.fadedColor};
  margin-bottom: 3rem;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-flow: row wrap;
  margin-top: 1rem;
`;

const ButtonContainer = styled(SubContainer)`
  margin-top: 2rem;
  justify-content: center;
`;

const StyledLink = styled.p`
  color: ${props => props.theme.mainColor};
  display: inline-block;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.fadedColor};
  }
`;

const SignInLink = styled(StyledLink)`
  margin-top: 2rem;
  text-decoration: underline;
`;

const SignUp = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const formValidator = combineValidators({
    firstName: isRequired("First Name"),
    lastName: isRequired("Last Name"),
    username: composeValidators(isRequired, hasLengthBetween(6, 40))(
      "Username"
    ),
    email: composeValidators(
      isRequired,
      matchesPattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )({
      message: "Email is not valid"
    }),
    password: composeValidators(isRequired, hasLengthBetween(6, 40))(
      "Password"
    ),
    confirmPassword: composeValidators(
      isRequired,
      hasLengthBetween(6, 40),
      matchesField("password")
    )({
      message: "Passwords do not match"
    })
  });

  const handleFieldsChange = e => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    setFormErrors(formValidator(formFields));
  };

  return (
    <StyledContainer>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Please complete to create your account.</StyledText>

      <form action="" method="post" onSubmit={submitForm}>
        <div style={{ display: "flex" }}>
          <InputField
            error={formErrors.firstName}
            value={formFields.firstName}
            onChange={handleFieldsChange}
            withMargin
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <InputField
            error={formErrors.lastName}
            value={formFields.lastName}
            onChange={handleFieldsChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
        </div>
        <InputField
          error={formErrors.username}
          value={formFields.username}
          onChange={handleFieldsChange}
          type="text"
          placeholder="Username"
          name="username"
        />
        <InputField
          error={formErrors.email}
          value={formFields.email}
          onChange={handleFieldsChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <InputField
          error={formErrors.password}
          value={formFields.password}
          onChange={handleFieldsChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <InputField
          error={formErrors.confirmPassword}
          value={formFields.confirmPassword}
          onChange={handleFieldsChange}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />

        <div style={{ textAlign: "left" }}>
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              style={{ marginRight: "0.7rem" }}
            />
            <StyledLink>I agree with the terms and conditions</StyledLink>
          </label>
        </div>

        <ButtonContainer>
          <MainButton solid type="submit">
            Sign Up
          </MainButton>
        </ButtonContainer>
        <Link to="signIn">
          <SignInLink>Already have an account? Sign in</SignInLink>
        </Link>
      </form>
    </StyledContainer>
  );
};

export default SignUp;
