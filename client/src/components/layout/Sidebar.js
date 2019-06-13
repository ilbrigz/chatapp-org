import React, { useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import themeContext from "../../context/themeContext";

const StyledSideBar = styled(Layout.Sider)`
  &:not(.ant-layout-sider-collapsed) {
    min-width: ${props =>
      props.menu === "opened"
        ? "260px !important"
        : props.menu === "closed"
          ? "80px !important"
          : "0px !important"};
    width: ${props =>
      props.menu === "opened"
        ? "260px !important"
        : props.menu === "closed"
          ? "80px !important"
          : "0px !important"};
    .ant-layout-sider-trigger {
      min-width: ${props =>
        props.menu === "opened"
          ? "260px !important"
          : props.menu === "closed"
            ? "80px !important"
            : "0px !important"};
      width: ${props =>
        props.menu === "opened"
          ? "260px !important"
          : props.menu === "closed"
            ? "80px !important"
            : "0px !important"};
    }
  }
  .ant-layout-sider-children {
    overflow: scroll;
  }
`;

const StyledLogo = styled.div`
  padding: 1rem;
  letter-spacing: 4px;
  color: ${props => props.theme.whiteColor};
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.1) !important;
  margin-bottom: 30px;
`;

const StyledLogoIcon = styled(StyledLogo)`
  text-align: center;
`;

const StyledItem = styled(Menu.Item)`
  position: relative;
  height: 50px !important;
  line-height: 50px !important;
  &::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 0;
    bottom: 0;
    width: 5px;
    background: ${props => props.theme.highlightColor};
    opacity: 0;
  }
  &.ant-menu-item-selected,
  &:hover {
    background: rgba(0, 0, 0, 0.1) !important;
    &::before {
      opacity: 1;
    }
    i {
      color: ${props => props.theme.highlightColor};
    }
  }
`;

const StyledSubMenu = styled(Menu.SubMenu)`
  position: relative;
  overflow: hidden;
  &:hover {
    background: rgba(0, 0, 0, 0.1) !important;
  }
  .ant-menu-sub {
    margin-left: ${props => (props.menu === "closed" ? "82px" : "0")};
  }
`;

const Sidebar = props => {
  const context = useContext(themeContext);
  console.log(context);
  const handleCloseMenu = () => {
    if (context.menuState === "opened") {
      context.updateMenuState("closed");
    } else {
      context.updateMenuState("opened");
    }
  };

  return (
    <StyledSideBar
      collapsible
      collapsed={context.menuState === "closed"}
      onCollapse={handleCloseMenu}
      breakpoint="md"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: 10000
      }}
      menu={context.menuState}
    >
      {context.menuState === "closed" ? (
        <StyledLogoIcon className="logo">
          <Icon type="pie-chart" />
        </StyledLogoIcon>
      ) : (
        <StyledLogo className="logo">KLATCH</StyledLogo>
      )}

      <Menu
        theme="dark"
        defaultSelectedKeys={[
          props.match.isExact ? "home" : props.location.pathname.split("/")[2]
        ]}
        mode="inline"
      >
        <StyledItem key="home">
          <Link to="/dashboard">
            <Icon type="home" theme="filled" />
            <span>Dashboard</span>
          </Link>
        </StyledItem>
        <StyledItem key="activeRooms">
          <Link to="/dashboard/activeRooms">
            <Icon type="message" theme="filled" />
            <span>Active Rooms</span>
          </Link>
        </StyledItem>
        <StyledItem key="3">
          <Link to="/dashboard">
            <Icon type="smile" theme="filled" />
            <span>Join Random Room</span>
          </Link>
        </StyledItem>
        <StyledItem key="4">
          <Link to="/dashboard">
            <Icon type="setting" theme="filled" />
            <span>Settings</span>
          </Link>
        </StyledItem>
        <StyledItem key="5">
          <Link to="/dashboard">
            <Icon type="global" />
            <span>Help</span>
          </Link>
        </StyledItem>
        <StyledItem key="6">
          <Link to="/dashboard">
            <Icon type="user" />
            <span>Log Out</span>
          </Link>
        </StyledItem>
        <StyledSubMenu
          menu={context.menuState}
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <StyledItem key="7">Tom</StyledItem>
          <StyledItem key="8">Bill</StyledItem>
          <StyledItem key="9">Alex</StyledItem>
        </StyledSubMenu>
      </Menu>
    </StyledSideBar>
  );
};

export default Sidebar;
