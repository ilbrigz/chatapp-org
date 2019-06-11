import styled from "styled-components";
import { Button, Input } from "antd";

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

export const StyledInput = styled(Input)`
  border-right: none;
  border-left: none;
  border-top: none;
  border-radius: 0;
  border-bottom-width: 2px;
  padding-bottom: 1rem;
  height: auto;
  box-shadow: none !important;
  ::placeholder {
    color: ${props => props.theme.mainColor};
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled(Button)`
  box-shadow: 0 4px 17px 0 rgba(67, 66, 93, 0.05),
    0 6px 20px 0 rgba(67, 66, 93, 0.1);
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme.mainColor};
  &:hover {
    box-shadow: 0 4px 17px 0 rgba(67, 66, 93, 0.2),
      0 6px 20px 0 rgba(67, 66, 93, 0.4);
  }
`;
