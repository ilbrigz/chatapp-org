import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendURL } from "../../variables";
import { Checkbox, Form, Modal } from "antd";
import {
  StyledButton,
  StyledInput,
  StyledHeader,
  ButtonContainer,
  StyledText,
  SignInLink,
  SubContainer,
  StyledContainer
} from "./Sign.styles";

const SignUp = props => {
  const [loading, setLoading] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        setLoading(true);
        try {
          await axios.post(`${backendURL}/signup`, values);
          setLoading(false);
          props.form.resetFields();
          Modal.success({
            title: "You signed up successfully",
            content: "You can login now",
            okText: "Login",
            onOk: () => props.history.push("/signin")
          });
        } catch (e) {
          setLoading(false);
          let errors = e.response.data;
          Object.keys(errors).map(function(key) {
            return props.form.setFields({
              [key]: {
                value: values[key],
                errors: errors[key].map(err => new Error(err))
              }
            });
          });
        }
      }
    });
  };

  const handleConfirmBlur = e => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Password doesn't match");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(["password2"], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = props.form;

  return (
    <StyledContainer>
      <StyledHeader>KLATCH</StyledHeader>
      <StyledText>Please complete to create your account.</StyledText>

      <Form onSubmit={handleSubmit} className="login-form">
        <div style={{ textAlign: "left" }}>
          <SubContainer>
            <Form.Item style={{ marginRight: 5 }}>
              {getFieldDecorator("firstName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your first name"
                  },
                  {
                    min: 3,
                    max: 40,
                    message: "First name must be between 3 and 40 characters"
                  }
                ]
              })(
                <StyledInput
                  disabled={loading}
                  placeholder="First Name"
                  autoComplete="given-name"
                />
              )}
            </Form.Item>
            <Form.Item style={{ marginLeft: 5 }}>
              {getFieldDecorator("lastName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your last name"
                  },
                  {
                    min: 3,
                    max: 40,
                    message: "Last name must be between 3 and 40 characters"
                  }
                ]
              })(
                <StyledInput
                  disabled={loading}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              )}
            </Form.Item>
          </SubContainer>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Username"
                },
                {
                  min: 3,
                  max: 40,
                  message: "Username must be between 3 and 40 characters"
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Username"
                autoComplete="username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: "Please input your Email"
                },
                {
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email is not valid"
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Email"
                autoComplete="email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password"
                },
                {
                  validator: validateToNextPassword
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Password"
                autoComplete="new-password"
                type="password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password2", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password"
                },
                {
                  validator: compareToFirstPassword
                }
              ]
            })(
              <StyledInput
                disabled={loading}
                placeholder="Confirm Password"
                autoComplete="new-password"
                type="password"
                onBlur={handleConfirmBlur}
              />
            )}
          </Form.Item>
        </div>
        <div style={{ textAlign: "left" }}>
          <Form.Item>
            {getFieldDecorator("terms", {
              valuePropName: "checked",
              initialValue: false,
              rules: [
                {
                  required: true,
                  transform: value => value || undefined,
                  type: "boolean",
                  message: "Please agree the terms and conditions."
                }
              ]
            })(
              <Checkbox disabled={loading} name="terms">
                I agree with the terms and conditions
              </Checkbox>
            )}
          </Form.Item>
        </div>
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
            Sign Up
          </StyledButton>
        </ButtonContainer>
      </Form>
      <Link to="signIn">
        <SignInLink>Already have an account? Sign in</SignInLink>
      </Link>
    </StyledContainer>
  );
};

export default Form.create({ name: "SignUp" })(SignUp);
