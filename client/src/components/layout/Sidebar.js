import React, { useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import themeContext from "../../context/themeContext";
import {
  ChatIcon,
  HelpIcon,
  HomeIcon,
  LogOutIcon,
  RandomRoomIcon,
  SettingsIcon
} from "../common/icons";

const StyledSideBar = styled(Layout.Sider)`
  &:not(.ant-layout-sider-collapsed) {
    min-width: 260px !important;
    .ant-layout-sider-trigger {
      min-width: 260px;
    }
  }
  @media screen and (max-width: 576px) {
    &.ant-layout-sider-collapsed {
      width: 0 !important;
      min-width: 0 !important;
    }
  }
  .ant-layout-sider-children {
    overflow: scroll;
  }
  .ant-menu-item .anticon svg {
    width: ${props => (props.menu ? "15px" : "20px")};
    height: ${props => (props.menu ? "15px" : "20px")};
  }
`;

const StyledLogo = styled.div`
  padding: 0 1rem;
  letter-spacing: 4px;
  color: ${props => props.theme.whiteColor};
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.1) !important;
  margin-bottom: 30px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.menu ? "flex-start" : "center")};
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
    margin-left: ${props => (props.menu ? "0" : "82px")};
  }
`;

const Sidebar = props => {
  const context = useContext(themeContext);

  return (
    <StyledSideBar
      collapsible
      collapsed={!context.menuOpened}
      onCollapse={context.updateMenuState}
      breakpoint="sm"
      trigger={null}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: 10000
      }}
      menu={context.menuOpened ? 1 : 0}
    >
      {context.menuOpened ? (
        <StyledLogo menu={context.menuOpened ? 1 : 0} className="logo">
          KLATCH
        </StyledLogo>
      ) : (
        <StyledLogo className="logo">
          <Icon type="pie-chart" />
        </StyledLogo>
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
            <HomeIcon />
            <span>Dashboard</span>
          </Link>
        </StyledItem>
        <StyledItem key="activeRooms">
          <Link to="/dashboard/activeRooms/chat1">
            <ChatIcon />
            <span>Active Rooms</span>
          </Link>
        </StyledItem>
        <StyledItem key="3">
          <Link to="/dashboard">
            <RandomRoomIcon />
            <span>Join Random Room</span>
          </Link>
        </StyledItem>
        <StyledItem key="4">
          <Link to="/dashboard">
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </StyledItem>
        <StyledItem key="5">
          <Link to="/dashboard">
            <HelpIcon />
            <span>Help</span>
          </Link>
        </StyledItem>
        <StyledItem key="6">
          <Link to="/dashboard">
            <LogOutIcon />
            <span>Log Out</span>
          </Link>
        </StyledItem>
        <StyledSubMenu
          menu={context.menuOpened ? 1 : 0}
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
