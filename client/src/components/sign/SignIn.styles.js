import styled from "styled-components";

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
