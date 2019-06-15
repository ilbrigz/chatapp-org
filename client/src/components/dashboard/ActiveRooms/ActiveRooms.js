import React, { useState, useRef, useEffect } from "react";
import { List, Avatar, Empty, Icon } from "antd";
import { Link } from "react-router-dom";
import {
  LayoutContainer,
  MainHeader,
  StyledListContainer,
  LeftSide,
  RightSide,
  ListHeader,
  StyledTextArea,
  StyledInputSearch
} from "./ActiveRooms.styles";
import { data1, dataChat, colorList } from "../DashboardHome/data";
import axios from "axios";
import { backendURL } from "../../../variables";

const ActiveRoom = props => {
  const roomChat = props.location.pathname.split("/")[3] || "chat1";

  const [chat, setChat] = useState(dataChat[roomChat]);
  const [rooms, setRooms] = useState([]);
  const [title, setTitle] = useState("");
  const listContainerRef = useRef(null);

  useEffect(() => {
    setChat(dataChat[roomChat]);
    let roomObj = data1.find(room => room.id === roomChat);
    if (roomObj) {
      setTitle(roomObj.title);
    }
  }, [roomChat]);
  useEffect(() => {
    async function fetchActiveRooms() {
      const result = await axios.get(`${backendURL}/room/popular/5`);
      setRooms(result.data.rooms);
    }
    fetchActiveRooms();
  }, []);

  const handleSearchRooms = e => {
    if (e.target.value) {
      setRooms(
        data1.filter(room =>
          room.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setRooms(data1);
    }
  };

  const handleAddChat = e => {
    e.preventDefault();
    if (e.target.value.trim()) {
      setChat([
        ...chat,
        {
          name: "@JohnDoe",
          avatar: "MD",
          message: e.target.value
        }
      ]);
      e.target.value = null;
      if (chat.length > 4) {
        let lastChildInList =
          listContainerRef.current.children[1].children[0].children[0]
            .children[0].children;
        setTimeout(() => {
          lastChildInList[lastChildInList.length - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 100);
      }
    }
  };

  if (!chat) {
    return null;
  }

  return (
    <LayoutContainer>
      <MainHeader level={2}>Active Rooms</MainHeader>
      <StyledListContainer>
        <LeftSide>
          <ListHeader level={3}>
            <StyledInputSearch
              placeholder="Search messages or names"
              prefix={<Icon type="search" />}
              onChange={handleSearchRooms}
            />
          </ListHeader>
          <List
            itemLayout="horizontal"
            dataSource={rooms}
            renderItem={item => (
              <List.Item className={roomChat === item._id && "active"}>
                <List.Item.Meta
                  title={
                    <Link to={`/dashboard/activeRooms/${item._id}`}>
                      <span>{item.roomName}</span>
                      <div>{item.userCount} online</div>
                    </Link>
                  }
                />
              </List.Item>
            )}
          />
        </LeftSide>
        <RightSide ref={listContainerRef}>
          <ListHeader level={3}>{title}</ListHeader>
          {chat.length ? (
            <List
              itemLayout="horizontal"
              dataSource={chat}
              locale={{
                emptyText: "No messages yet!"
              }}
              renderItem={(item, i) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={60}
                        style={{
                          backgroundColor: colorList[i % 10]
                        }}
                      >
                        {item.avatar}
                      </Avatar>
                    }
                    title={
                      <a
                        href="https://ant.design"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </a>
                    }
                    description={item.message}
                  />
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No messages yet" />
          )}
          <StyledTextArea
            onPressEnter={handleAddChat}
            row={10}
            placeholder="Type your message here..."
          />
        </RightSide>
      </StyledListContainer>
    </LayoutContainer>
  );
};

export default ActiveRoom;
