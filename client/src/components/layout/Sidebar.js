import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledSideBar = styled(Layout.Sider)`
  &:not(.ant-layout-sider-collapsed) {
    flex: 0 0 260px !important;
    max-width: 260px !important;
    min-width: 260px !important;
    width: 260px !important;
    .ant-layout-sider-trigger {
      width: 260px !important;
    }
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
  &::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 0;
    width: 5px;
    height: 48px;
    background: ${props => props.theme.highlightColor};
    opacity: 0;
    transition: all 0.2s ease-in;
  }
  &.ant-menu-item-selected,
  &:hover {
    background: rgba(0, 0, 0, 0.1) !important;
    &::before {
      opacity: 1;
    }
  }
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledSideBar
      collapsible
      collapsed={collapsed}
      onCollapse={collapsed => setCollapsed(collapsed)}
      breakpoint="md"
    >
      {collapsed ? (
        <StyledLogoIcon className="logo">
          <Icon type="pie-chart" />
        </StyledLogoIcon>
      ) : (
        <StyledLogo className="logo">KLATCH</StyledLogo>
      )}

      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <StyledItem key="1">
          <Link to="/dashboard">
            <Icon type="home" theme="filled" />
            <span>Dashboard</span>
          </Link>
        </StyledItem>
        <StyledItem key="2">
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
