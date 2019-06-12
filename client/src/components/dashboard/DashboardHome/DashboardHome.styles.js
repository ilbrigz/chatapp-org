import styled from "styled-components";
import {Layout} from "antd";

export const LayoutContainer = styled(Layout.Content)`
  padding: 2rem 1rem;
  margin-top: 64px;
  @media screen and (max-width: 600px) {
  padding: 0;
  .ant-list, .ant-form {
  
  margin-left: 3px !important;
  margin-right: 3px !important;
  }
  };
`;

export const StyledListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    background: white;
    flex: 1;
    margin: 1rem;
    padding: 1rem 2rem;
    & > div {
      max-width: 450px;
      margin: 0 auto;
    }
    .ant-list-header {
      border-bottom-width: 2px;
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 0;
      }
    }
    li {
      border: none !important;
      &:nth-of-type(even) {
        span {
          color: ${props => props.theme.highlightColor};
        }
      }
      &:nth-of-type(odd) {
        span {
          color: ${props => props.theme.linkColor};
        }
      }
      span:hover {
        color: ${props => props.theme.mainColor};
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.secondaryColor};
`;
