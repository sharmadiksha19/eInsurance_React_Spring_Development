import React, { useState } from "react";
import Header from "../Header";
import background from "../../images/images.jpeg";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios
        .post("http://localhost:8080/eInsurance/admin/login", {
          username: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Username not exits") {
              alert("username not exits");
            } else if (res.data.message == "Admin Login Success") {
              navigate("/admin-home");
            } else {
              alert("Incorrect Username and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );

      alert(response.data.message);
      // Handle success, redirect, or update state as needed
    } catch (error) {
      alert("Admin Login Success");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div
        id="hero"
        className="signup-form"
        style={{ backgroundImage: "url(" + background + ")" }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Admin Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Admin Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AdminLogin;
