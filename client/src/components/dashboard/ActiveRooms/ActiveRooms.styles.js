import styled from "styled-components";
import { Layout, Typography, Input } from "antd";

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
  align-items: flex-start;
  background: #ffffff;
  flex-flow: row wrap;
  flex-flow: row wrap;
  .ant-list-items,
  .ant-empty {
    height: 450px;
    overflow: scroll;
    @media screen and (max-width: 992px) {
      height: 350px;
    }
  }
  .ant-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ListHeader = styled(Typography.Title)`
  border-bottom: 1px solid #f1f1f3;
  padding: 1rem 2rem;
  height: 80px;
  margin-bottom: 0 !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 992px) {
    padding: 1rem;
    height: 60px;
  }
`;
export const LeftSide = styled.div`
  flex: 1 0 250px;
  li {
    padding: 0;
    transition: all 0.2s ease-in;
    h4 {
      margin: 0;
    }
    a {
      padding: 2rem;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
      @media screen and (max-width: 992px) {
        padding: 1rem 0.5rem;
      }
    }
    &.active,
    &:hover {
      background: #f5f6fa;
    }
    span {
      font-weight: bold;
    }
    &:nth-of-type(even) {
      span {
        color: ${props => props.theme.highlightColor};
      }
    }
    &:nth-of-type(odd) {
      span {
        color: ${props => props.theme.linkColor}z;
      }
    }
    span:hover {
      color: ${props => props.theme.mainColor};
    }
  }
`;

export const RightSide = styled.div`
  flex: 2 0 300px;
  position: relative !important;
  padding-bottom: 185px;
  border-left: 1px solid #f1f1f3;
  li {
    padding: 1rem 2rem;
    border: none !important;
    word-break: break-word;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  border: none;
  height: 170px !important;
  background: #f5f6fa;
  border-radius: 5px;
  padding: 1rem;
  width: 95%;
  position: absolute;
  bottom: 1rem;
  left: 2.5%;
  color: ${props => props.theme.mainColor};
  ::placeholder {
    color: ${props => props.theme.secondaryColor};
  }
`;

export const StyledInputSearch = styled(Input)`
  input {
    border: none;
    padding: 0 5px 0 30px;
  }
  .ant-input-prefix {
    left: 5px;
  }
`;
