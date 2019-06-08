import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {combineValidators, isRequired} from 'revalidate';
import MainButton from "../styledComponents/MainButton";
import InputField from "../styledComponents/InputField";

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

const LinksContainer = styled(SubContainer)`
    label, p, a {
      color: ${props => props.theme.mainColor};
      text-decoration: none;
      transition: all 0.2s ease-in;
      cursor: pointer;
      margin: 0;
      font-size: 1rem;
      &:hover {
        color: ${props => props.theme.fadedColor};
      }
    }
    input {
      margin-right: 0.7rem;
    }
  `;

const ButtonContainer = styled(SubContainer)`
    margin-top: 3rem;
    justify-content: center;
  `;

const SignIn = () => {

  const [formFields, setFormFields] = useState({ user: "", password: "" });
  const [formErrors, setFormErrors] = useState({ user: "", password: "" });

  const formValidator = combineValidators({
    user: isRequired('User'),
    password: isRequired("Password")
  });

  const handleFieldsChange = e => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(formValidator(formFields))
  };

  return (
    <div style={{textAlign: 'center', padding: '1rem'}}>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Welcome back! Please login to your account.</StyledText>
      <form action="" method='post' onSubmit={submitForm}>
        <InputField onChange={handleFieldsChange} value={formFields.user} error={formErrors.user} type="text" placeholder="Username or Email" name="user"/>
        <InputField onChange={handleFieldsChange} value={formFields.password} error={formErrors.password} type="password" placeholder="Password" name="password"/>
        <LinksContainer>
          <label htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe"/>
            Remember me
          </label>
          <Link to="forgotPassword">
            <p>Forgot Password</p>
          </Link>
        </LinksContainer>
        <ButtonContainer>
          <MainButton solid type="submit">Login</MainButton>
          <Link to="/signUp">
            <MainButton>Sign Up</MainButton>
          </Link>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default SignIn;
