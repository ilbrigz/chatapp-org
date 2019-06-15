import styled from "styled-components";
import { Layout, Typography } from "antd";

export const LayoutContainer = styled(Layout.Content)`
  padding: 2rem 1rem;
  margin-top: 64px;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
    padding: 0;
    .ant-list,
    .ant-form {
      margin-left: 3px !important;
      margin-right: 3px !important;
    }
  }
`;

export const MainHeader = styled(Typography.Title)`
  margin: 0 1rem;
  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
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

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row wrap;
  padding-bottom: 1rem;
  > div {
    flex: 1 0 170px;
    margin: 0 2rem;
    @media screen and (max-width: 500px) {
      margin: 0 1rem;
    }
    input[type="text"] {
      height: 40px;
    }
  }
  .ant-radio-wrapper {
    height: auto !important;
  }
`;

export const StyledHeader = styled(Typography.Title)`
  padding: 2rem 0 1rem 0;
  margin-left: 2rem;
  border-bottom: 2px solid #e8e8e8;
  max-width: 400px;
`;

export const FadedP = styled.p`
  color: ${props => props.theme.fadedP};
`;

export const FadedSpan = styled.span`
  color: ${props => props.theme.fadedP};
  white-space: normal;
`;

export const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};
