import React, { useState, useEffect } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

function UserForm({ onUserAdded }) {
  const navigate = useNavigate();
  const [Success, setSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    if (Success) {
      alert("User Added Successfully");
      onUserAdded();
    }
  }, [Success, onUserAdded]);
  async function register(event) {
    const formattedDateOfBirth = dateOfBirth
      ? moment(dateOfBirth).format("YYYY-MM-DD")
      : null;
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/eInsurance/user/addUser", {
        fullName: fullName,
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        dateOfBirth: formattedDateOfBirth,
        address: address,
        contactNumber: contactNumber,
        role: role,
      });
      console.log("Form data:", {
        fullName,
        userName,
        email,
        password,
        confirmPassword,
        dateOfBirth: formattedDateOfBirth,
        address,
        contactNumber,
        role,
      });
      setSuccess(true);
    } catch (err) {
      alert(err);
      console.log("Failed:", err);
    }
  }

  return (
    <>
      <Form
        layout="vertical"
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
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your Full Name!",
            },
          ]}
        >
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your Confirm password!",
            },
          ]}
        >
          <Input.Password
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item name="dateOfBirth" label="Date Of Birth">
          <DatePicker
            value={dateOfBirth}
            onChange={(moment, dateString) => {
              setDateOfBirth(dateString);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[
            {
              required: true,
              message: "Please input your contact number!",
            },
            {
              pattern: /^\d{10}$/, // Assuming a 10-digit contact number; adjust as needed
              message: "Please enter a valid 10-digit contact number!",
            },
          ]}
        >
          <Input
            value={contactNumber}
            onChange={(event) => {
              setContactNumber(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role" }]}
        >
          <Select
            placeholder="Select Role"
            value={role}
            onChange={(value) => setRole(value)}
          >
            <Option value="ADMIN">ADMIN</Option>
            <Option value="CUSTOMER">CUSTOMER</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={register}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserForm;
