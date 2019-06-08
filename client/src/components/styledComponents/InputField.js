import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputContainer = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
    margin-right: ${props => (props.withMargin ? "0.5rem" : "0")};
    p {
      color: #ab2330;
      font-size: 0.7rem;
      margin: 0;
    }
  `;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    padding: 1rem 0.4rem;
    transition: all 0.2s ease-in;
    margin-bottom: 0.5rem;
    border-bottom: ${props =>
  props.error ? "2px solid #efadb3" : "2px solid #E9E9F0"};
    &:focus {
      outline: none;
      border-bottom: ${props =>
  props.error ? "2px solid #ab2330" : "2px solid #bfbfc5"};
    }
    ::placeholder {
      color: ${props => props.theme.mainColor};
      font-size: 0.8rem;
    }
  `;

const InputField = props => {
  return (
    <InputContainer {...props}>
      <StyledInput {...props} />
      <p>{props.error || ""}</p>
    </InputContainer>
  );
};

InputField.propTypes = {
  error: PropTypes.string,
  withMargin: PropTypes.bool,
};

export default InputField;
