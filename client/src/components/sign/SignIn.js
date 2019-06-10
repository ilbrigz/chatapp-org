import React, { useState } from "react";
import { Link } from "react-router-dom";
import { combineValidators, isRequired } from "revalidate";
import MainButton from "../common/MainButton";
import InputField from "../common/InputField";
import {
  StyledText,
  ButtonContainer,
  StyledHeader,
  LinksContainer
} from "./SignIn.styles";
import axios from "axios";
import { backendURL } from "../../variables";

const SignIn = () => {
  const [formFields, setFormFields] = useState({
    userName: "",
    password: "",
    rememberMe: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoader] = useState(false);

  const formValidator = combineValidators({
    userName: isRequired("User"),
    password: isRequired("Password")
  });

  const handleFieldsChange = e => {
    if (e.target.name === "rememberMe") {
      setFormFields({
        ...formFields,
        rememberMe: !formFields.rememberMe
      });
    } else {
      setFormFields({
        ...formFields,
        [e.target.name]: e.target.value
      });
    }

    //Remove field error
    delete formErrors[e.target.name];
  };

  const submitForm = async e => {
    e.preventDefault();
    const errors = formValidator(formFields);
    setFormErrors(errors);

    //check if no errors
    if (Object.entries(errors).length === 0 && errors.constructor === Object) {
      try {
        setFormLoader(true);
        const res = await axios.post(`${backendURL}/signin`, formFields);
        console.log(res);
        alert(`Signed in ${res.data.firstName}`);
        //Remove loader and reset fields
        setFormLoader(false);
        setFormFields({
          userName: "",
          password: "",
          rememberMe: false
        });
      } catch (e) {
        console.log(e.response);
        setFormErrors({ userName: "User not found" });
        setFormLoader(false);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Welcome back! Please login to your account.</StyledText>
      <form action="" method="post" onSubmit={submitForm}>
        <InputField
          disabled={formLoading}
          onChange={handleFieldsChange}
          value={formFields.userName}
          error={formErrors.userName}
          type="text"
          placeholder="Username or Email"
          name="userName"
          autoComplete="username || email"
        />
        <InputField
          disabled={formLoading}
          onChange={handleFieldsChange}
          value={formFields.password}
          error={formErrors.password}
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
        />
        <LinksContainer>
          <label htmlFor="rememberMe">
            <input
              disabled={formLoading}
              onChange={handleFieldsChange}
              defaultChecked={formFields.rememberMe}
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            Remember me
          </label>
          <Link to="forgotPassword">
            <p>Forgot Password</p>
          </Link>
        </LinksContainer>
        <ButtonContainer>
          <MainButton solid type="submit" loading={formLoading}>
            Login
          </MainButton>
          <Link to="/signUp">
            <MainButton>Sign Up</MainButton>
          </Link>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default SignIn;
