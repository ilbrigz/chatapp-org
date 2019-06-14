import React, { useState } from "react";
import { Form, Input, Button, Radio, Modal } from "antd";
import axios from "axios";
import {
  StyledContainer,
  StyledHeader,
  FadedP,
  radioStyle,
  FadedSpan
} from "./DashboardHome.styles";
import { backendURL } from "../../../variables";

const CreateRoomForm = props => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      setLoading(true);
      try {
        await axios.post(`${backendURL}/createRoom`, values);
        setLoading(false);
        props.form.resetFields();
        Modal.success({
          title: "Your room was created",
          content: "You can always add more friends to your room",
          okText: "Visit Room",
          maskClosable: true,
          onOk: () => {
            console.log("XXXX");
          }
        });
      } catch (e) {
        setLoading(false);
        let errors = e.response.data;
        console.log(errors);
      }

      if (!err) {
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{
        background: "#ffffff",
        margin: "1rem"
      }}
    >
      <StyledHeader level={2}>Create a New Room</StyledHeader>
      <StyledContainer>
        <div>
          <Form.Item>
            <FadedP style={{ margin: 0 }}>Chatroom Name (required)</FadedP>
            {getFieldDecorator("roomName", {
              rules: [
                {
                  required: true,
                  message: "Please input the room name!"
                },
                {
                  min: 3,
                  max: 40,
                  message: "Invalid Room name"
                }
              ]
            })(<Input disabled={loading} placeholder="Name" />)}
          </Form.Item>
          <Form.Item>
            <FadedP style={{ margin: 0 }}>Invite User (required)</FadedP>
            {getFieldDecorator("invitedUser1", {
              rules: [
                {
                  required: true,
                  message: "Please input your username or email!"
                },
                {
                  min: 3,
                  max: 40,
                  message: "Invalid Username or Email"
                }
              ]
            })(<Input disabled={loading} placeholder="Username or Email" />)}
          </Form.Item>
          <Form.Item>
            <FadedP style={{ margin: 0 }}>Invite User</FadedP>
            {getFieldDecorator("invitedUser2", {})(
              <Input disabled={loading} placeholder="Username or Email" />
            )}
          </Form.Item>
        </div>
        <div>
          <FadedP>Make my chatroom: (required)</FadedP>
          {getFieldDecorator("isPublic", {
            initialValue: true,
            rules: [
              {
                required: true,
                message: "Please Choose your option!"
              }
            ]
          })(
            <Radio.Group disabled={loading} name="roomPrivacy">
              <Radio style={radioStyle} value={true}>
                <FadedSpan>
                  Public - all users can join, even without an invitation
                </FadedSpan>
              </Radio>
              <Radio style={radioStyle} value={false}>
                <FadedSpan>
                  Private - only users with admin invitation can join
                </FadedSpan>
              </Radio>
            </Radio.Group>
          )}
          <div>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              style={{ marginTop: "1rem" }}
            >
              Create Room
            </Button>
          </div>
        </div>
      </StyledContainer>
    </Form>
  );
};

export default Form.create({ name: "normal_login" })(CreateRoomForm);
