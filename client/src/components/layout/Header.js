import React, { useState } from "react";
import { Layout, Menu, Input, AutoComplete, Icon, Avatar } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Menu)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
  padding-left: 30px;
`;

const StyledSearch = styled(Input.Search)`
  input {
    padding-left: 30px;
    border: none;
    box-shadow: none !important;
  }
  span {
    left: 0;
    right: 100% !important;
  }
`;

const StyledItemGroup = styled(Menu.SubMenu)`
  float: right !important;
  position: absolute !important;
  right: 270px;
  height: 64px;
  min-width: 200px;
`;

const Header = () => {
  const [dataSource, setDataSource] = useState([]);
  const handleSearch = value => {
    setDataSource(!value ? [] : [value, value + value, value + value + value]);
  };

  const onSelect = value => console.log("onSelect", value);

  return (
    <Layout.Header
      style={{ position: "fixed", zIndex: 1, width: "100%", paddingLeft: 0 }}
    >
      <StyledHeader
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 300 }}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <StyledSearch
            placeholder="Search chatrooms or users"
            onSearch={value => console.log(value)}
            style={{ width: 300 }}
          />
        </AutoComplete>
        <StyledItemGroup
          title={
            <span className="submenu-title-wrapper">
              John Doe
              <Icon type="caret-down" style={{ paddingLeft: 10 }} />
              <Avatar size={"large"}>MD</Avatar>
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              <Icon type="setting" />
              Account Settings
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Icon type="lock" />
              Security Settings
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Icon type="usergroup-add" />
              Friends
            </Menu.Item>
          </Menu.ItemGroup>
        </StyledItemGroup>
      </StyledHeader>
    </Layout.Header>
  );
};

export default Header;
