import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const MainButton = (props) => {

  const StyledButton = styled.button`
    border-radius: 4px;
    padding: 0.7rem 2rem;
    margin: 0.5rem;
    border: ${props => `1px solid ${props.theme.mainColor}`};
    background: ${props => props.solid ? props.theme.mainColor : props.theme.whiteColor};
    color: ${props => props.solid ? props.theme.whiteColor : props.theme.secondaryColor};
    font-size: 1.2rem;
    min-width: 190px;
    transition: all 0.2s linear;
    cursor: pointer;
    box-shadow: 0 4px 17px 0 rgba(67,66,93,0.05), 0 6px 20px 0 rgba(67,66,93,0.1);
    &:hover {
        box-shadow: 0 4px 17px 0 rgba(67,66,93,0.2), 0 6px 20px 0 rgba(67,66,93,0.4);
    }
  `;

  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
};

MainButton.propTypes = {
  solid: PropTypes.bool
};

export default MainButton;
