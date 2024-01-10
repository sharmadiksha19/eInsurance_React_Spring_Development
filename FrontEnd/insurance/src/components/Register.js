import React, { useState } from "react";
import Header from "./Header";
import background from "../images/images.jpeg";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

function Register() {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");

  async function register(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/eInsurance/user/register", {
        fullName: fullName,
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        dateOfBirth: dateOfBirth,
        address: address,
        contactNumber: contactNumber,
        gender: gender,
      });
      alert("Registered Successfully");
      console.log("Form data:", {
        fullName,
        userName,
        email,
        password,
        confirmPassword,
        dateOfBirth,
        address,
        contactNumber,
        gender,
      });
      setRegistrationSuccess(true);
    } catch (err) {
      alert(err);
      console.log("Failed:", err);
    }
  }

  if (registrationSuccess) {
    navigate("/login");
  }
  return (
    <>
      <Header />
      <div
        id="hero"
        className="signup-form"
        style={{
          backgroundImage: "url(" + background + ")",
          marginTop: "10rem",
        }}
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
            marginTop: 20,
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
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select a gender" }]}
          >
            <Select
              placeholder="Select gender"
              value={gender}
              onChange={(value) => setGender(value)}
            >
              <Option value="MALE">MALE</Option>
              <Option value="FEMALE">FEMALE</Option>
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
      </div>
    </>
  );
}

export default Register;
