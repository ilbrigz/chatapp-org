import React, { useState, useEffect } from "react";
import { List, Typography, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  StyledLink,
  StyledListContainer,
  LayoutContainer,
  MainHeader
} from "./DashboardHome.styles";
import { data2, menu1Links, menu2Links } from "./data";
import CreateRoomForm from "./CreateRoomForm";
import axios from "axios";
import useAuthContext from "../../../context/useAuthContext";

const DashboardHome = () => {
  const [rooms, setRooms] = useState([]);
  const [favoriteRooms, setfavoriteRooms] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    async function fetchActiveRooms() {
      const result = await axios.get(`/room/popular/5`);

      setRooms(result.data.rooms);
    }
    fetchActiveRooms();
  }, []);
  useEffect(() => {
    async function fetchFavoriteRooms() {
      const result = await axios.get(`/user/${authUser.userId}`);

      setfavoriteRooms(result.data.rooms);
    }
    fetchFavoriteRooms();
  }, []);

  const menu1 = (
    <Menu>
      {menu1Links.map((link, i) => (
        <Menu.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href={link.link}>
            {link.title}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menu2 = (
    <Menu>
      {menu2Links.map((link, i) => (
        <Menu.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href={link.link}>
            {link.title}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const TableTitle = props => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexFlow: "row wrap"
      }}
    >
      <Typography.Title level={2}>{props.title}</Typography.Title>
      <Dropdown overlay={props.menu} trigger={["click"]}>
        <StyledLink className="ant-dropdown-link" href="#">
          {props.link} <Icon type="down" />
        </StyledLink>
      </Dropdown>
    </div>
  );

  const TableFooter = props => (
    <Link to={props.room}>
      <span style={{ textAlign: "right", display: "block" }}>
        <Icon type="caret-right" style={{ marginRight: 5 }} />
        {props.title}
      </span>
    </Link>
  );

  return (
    <LayoutContainer>
      <MainHeader level={2}>Dashboard</MainHeader>
      <StyledListContainer>
        <List
          itemLayout="horizontal"
          dataSource={rooms}
          header={
            <TableTitle title="Join a Room" menu={menu1} link="Most Popular" />
          }
          footer={
            <TableFooter
              room="dashboard/activeRooms/chat1"
              title="Show All Rooms"
            />
          }
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to={`/dashboard/activeRooms/${item._id}`}>
                    <span>{item.roomName}</span>
                  </Link>
                }
              />
              <div>{item.userCount} online</div>
            </List.Item>
          )}
        />
        <List
          itemLayout="horizontal"
          dataSource={data2}
          header={<TableTitle title="Favourites" menu={menu2} link="Sort By" />}
          footer={
            <TableFooter
              room="dashboard/activeRooms/chat1"
              title="Show All Rooms"
            />
          }
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to="https://ant.design">
                    <span>{item.title}</span>
                  </Link>
                }
              />
              <div>1,214 online</div>
            </List.Item>
          )}
        />
      </StyledListContainer>
      <CreateRoomForm userId={authUser.userId} />
    </LayoutContainer>
  );
};

export default DashboardHome;
