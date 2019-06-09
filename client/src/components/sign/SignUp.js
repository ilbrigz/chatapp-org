import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  combineValidators,
  matchesField,
  matchesPattern,
  isRequired,
  hasLengthBetween,
  composeValidators,
  isOneOf
} from "revalidate";
import axios from "axios";
import { backendURL } from "../../variables";
import MainButton from "../styledComponents/MainButton";
import InputField from "../styledComponents/InputField";
import {
  StyledHeader,
  ButtonContainer,
  StyledText,
  SignInLink,
  StyledLink,
  StyledContainer
} from "./SignUp.styles";

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
    email: "",
    password2: "",
    termsAccepted: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoader] = useState(false);

  const formValidator = combineValidators({
    firstName: isRequired("First Name"),
    lastName: isRequired("Last Name"),
    userName: composeValidators(isRequired, hasLengthBetween(6, 40))(
      "Username"
    ),
    email: composeValidators(
      isRequired,
      matchesPattern(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )({
      message: "Email is not valid"
    }),
    password: composeValidators(isRequired, hasLengthBetween(6, 40))(
      "Password"
    ),
    password2: composeValidators(
      isRequired,
      hasLengthBetween(6, 40),
      matchesField("password")
    )({
      message: "Passwords do not match"
    }),
    termsAccepted: isOneOf([true, "true"])({
      message: "Please accept the terms and conditions"
    })
  });

  const handleFieldsChange = e => {
    if (e.target.name === "termsAccepted") {
      setFormFields({
        ...formFields,
        termsAccepted: !formFields.termsAccepted
      });
      return;
    }
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async e => {
    e.preventDefault();
    const errors = formValidator(formFields);
    setFormErrors(errors);

    //check if no errors
    if (Object.entries(errors).length === 0 && errors.constructor === Object) {
      try {
        setFormLoader(true);
        const res = await axios.post(`${backendURL}/signup`, formFields);
        alert(`Welcome ${res.data.firstName} ${res.data.lastName}`);
        //Remove loader and reset fields
        setFormLoader(false);
        setFormFields({
          firstName: "",
          lastName: "",
          password: "",
          userName: "",
          email: "",
          password2: "",
          termsAccepted: false
        });
      } catch (e) {
        setFormErrors(e.response.data);
        setFormLoader(false);
      }
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Please complete to create your account.</StyledText>

      <form action="" method="post" onSubmit={submitForm}>
        <div style={{ display: "flex" }}>
          <InputField
            disabled={formLoading}
            error={formErrors.firstName}
            value={formFields.firstName}
            onChange={handleFieldsChange}
            withMargin
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <InputField
            disabled={formLoading}
            error={formErrors.lastName}
            value={formFields.lastName}
            onChange={handleFieldsChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
        </div>
        <InputField
          disabled={formLoading}
          error={formErrors.userName}
          value={formFields.userName}
          onChange={handleFieldsChange}
          type="text"
          placeholder="Username"
          name="userName"
        />
        <InputField
          disabled={formLoading}
          error={formErrors.email}
          value={formFields.email}
          onChange={handleFieldsChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <InputField
          disabled={formLoading}
          error={formErrors.password}
          value={formFields.password}
          onChange={handleFieldsChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <InputField
          disabled={formLoading}
          error={formErrors.password2}
          value={formFields.password2}
          onChange={handleFieldsChange}
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />

        <div style={{ textAlign: "left" }}>
          <label htmlFor="termsAccepted">
            <input
              disabled={formLoading}
              defaultChecked={formFields.termsAccepted}
              onChange={handleFieldsChange}
              type="checkbox"
              id="termsAccepted"
              style={{ marginRight: "0.7rem" }}
              name="termsAccepted"
            />
            <StyledLink disabled={formLoading}>I agree with the terms and conditions</StyledLink>
          </label>
          <p
            style={{
              color: "#ab2330",
              fontSize: "0.7rem",
              margin: 0
            }}
          >
            {formErrors.termsAccepted}
          </p>
        </div>

        <ButtonContainer>
          <MainButton loading={formLoading} solid type="submit" disabled={formLoading}>
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
