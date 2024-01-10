import React, { useState } from "react";
import Header from "./Header";
import background from "../images/images.jpeg";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { setUser, releaseUser } from "../redux/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import { setCustomer, releaseCustomer } from "../redux/CustomerSlice";
import ApiService from "../Services/ApiService";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  const dispatch = useDispatch();

  const packageDetails = useSelector((state) => state.package);
  const chosen = useSelector((state) => state.chosenPackage);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/eInsurance/user/login", {
          username: userName,
          password: password,
        })
        .then(
          async (res) => {
            console.log(res.data);
            // setData(res.data);
            let data = res.data;
            if (res.status === 200) {
              try {
                const response = await ApiService.customerGet(userName); // Call the signIn method from ApiService
                console.log("customer Fetched Successfully:", response.data);

                let customer = response.data;
                if (response.status === 200) {
                  dispatch(setCustomer({ customer }));
                  // const customer1 = useSelector((state) => state.customer.customer);
                  console.log(customer);
                } else {
                  console.log("Failed to Fetch Customer");
                }

                // Redirect logic or token storage can be placed here after successful login
              } catch (error) {
                console.error("Login error:", error);
                // Handle error (e.g., display error message)
              }

              dispatch(setUser({ data }));
              alert("Welcome " + data.username);
              if (!(packageDetails.basic === "") && data.role === "CUSTOMER") {
                if (chosen.type === "Health") {
                  navigate("/checkout");
                } else if (chosen.type === "Vehicle") {
                  navigate("/checkoutRe");
                } else if (chosen.type === "Renter") {
                  navigate("/checkoutRent");
                }
              } else if (data.role === "CUSTOMER") {
                navigate("/customer");
              } else {
                navigate("/home");
              }
            } else {
              alert("Incorrect Username and Password or register with us");
              alert("Incorrect Username and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
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
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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

          <Form.Item name="remember" valuePropName="unchecked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={login}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/forgot-password">Forgot Password?</Link>
            <Divider />
            <Link to="/register">Create an account</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
