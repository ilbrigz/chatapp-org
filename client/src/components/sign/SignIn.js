import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Checkbox, Modal } from "antd";
import axios from "axios";
import {
  StyledInput,
  StyledButton,
  StyledText,
  ButtonContainer,
  StyledHeader,
  LinksContainer
} from "./Sign.styles";
import { backendURL } from "../../variables";
import { AuthContext } from "../../context/authContext";

const SignIn = props => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        try {
          const response = await axios.post(`${backendURL}/signin`, values);
          setLoading(false);
          props.form.resetFields();
          const { userId, userName } = response.data;
          setAuthUser({
            userName,
            userId,
            auth: true
          });
          Modal.success({
            title: "You are logged in successfully",
            content: "You will be redirected to your dashboard",
            okText: "Visit Dashboard",
            onOk: () => props.history.push("/dashboard")
          });
        } catch (e) {
          setLoading(false);
          props.form.setFields({
            userName: {
              value: values.userName,
              errors: [new Error("User and password doesn't match")]
            }
          });
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Welcome back! Please login to your account.</StyledText>
      <Form onSubmit={handleSubmit} className="login-form">
        <div style={{ textAlign: "left" }}>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Username or Email"
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Username or Email"
                autoComplete="name || email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password"
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Password"
                autoComplete="current-password"
                type="password"
              />
            )}
          </Form.Item>
        </div>
        <LinksContainer>
          <Checkbox disabled={loading} name="rememberMe">
            Remember me
          </Checkbox>
          <Link to="forgotPassword">
            <p>Forgot Password</p>
          </Link>
        </LinksContainer>
        <ButtonContainer>
          <StyledButton
            loading={loading}
            type="primary"
            htmlType="submit"
            size={"large"}
            style={{
              margin: "1rem",
              height: 50,
              paddingLeft: "4rem",
              paddingRight: "4rem"
            }}
          >
            Login
          </StyledButton>
          <Link to="/signUp">
            <StyledButton
              size={"large"}
              style={{
                margin: "1rem",
                height: 50,
                paddingLeft: "4rem",
                paddingRight: "4rem"
              }}
            >
              Sign Up
            </StyledButton>
          </Link>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default Form.create({ name: "Login" })(SignIn);
