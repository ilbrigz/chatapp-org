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

export const StyledContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 2rem 0;
  @media screen and (min-width: 800px) {
    min-width: 80%;
  }
`;

export const StyledLink = styled.p`
  color: ${props => props.theme.mainColor};
  opacity: ${props => (props.disabled ? "0.5" : 1)}
  display: inline-block;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.fadedColor};
  }
`;

export const SignInLink = styled(StyledLink)`
  margin-top: 2rem;
  text-decoration: underline;
`;

export const StyledHeader = styled.h2`
  letter-spacing: 4px;
  color: ${props => props.theme.mainColor};
  font-size: 1.8rem;
  margin-top: 0;
`;

export const StyledText = styled.p`
  color: ${props => props.theme.fadedColor};
  margin-bottom: 3rem;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-flow: row wrap;
  margin-top: 1rem;
  > div {
    flex: 1;
  }
`;

export const LinksContainer = styled(SubContainer)`
  label,
  p,
  a {
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

export const ButtonContainer = styled(SubContainer)`
  margin-top: 3rem;
  justify-content: center;
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
