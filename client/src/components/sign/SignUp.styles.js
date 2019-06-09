import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 4rem 0;
  @media screen and (min-width: 800px) {
    min-width: 80%;
  }
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
`;

export const ButtonContainer = styled(SubContainer)`
  margin-top: 2rem;
  justify-content: center;
`;

export const StyledLink = styled.p`
  color: ${props => props.theme.mainColor};
  opacity: ${props => props.disabled ? "0.5" : 1}
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
