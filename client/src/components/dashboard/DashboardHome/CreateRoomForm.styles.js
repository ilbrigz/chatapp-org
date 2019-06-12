import styled from "styled-components";
import { Typography } from "antd";

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
