import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, DatePicker, Row, Col } from "antd";
import axios from "axios"; // Import Axios
import { InputNumber, Radio, Slider } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const HealthPolicyForm = () => {
  const [inputValue, setInputValue] = useState(3);

  const onSlide = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({}); // You can store fetched data here

  const onFinish = (values) => {
    // Handle form submission (e.g., send data to server)
    console.log("Vehicle Policy Form Values:", values);
    alert(`Vehicle Policy for ${username} created succesfully`);
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts or when the username changes
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/eInsurance/customer/healthPolicy/${username}`
        );
        const data = response.data;

        setUserData(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <>
      <Input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Form */}
      <Form onFinish={onFinish} layout="vertical" style={{ marginTop: "10px" }}>
        <Row gutter={16}>
          {/* First Column */}
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your First name and Last name!",
                },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
          </Col>
          {/* Second Column */}
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              type="email"
              rules={[
                {
                  required: true,
                  message: "Please put your email Id",
                },
              ]}
            >
              <Input placeholder="Email ID" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="dob" label="Date Of Birth">
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Height"
              name="height"
              rules={[
                {
                  required: true,
                  message: "Please put your height",
                },
              ]}
            >
              <Input placeholder="Height in CM" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Weight"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Please put your Weight",
                },
              ]}
            >
              <Input placeholder="Weight in KG" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="bloodGroup"
              label="BloodGroup"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please put your BloodGroup!",
                },
              ]}
            >
              <Select placeholder="Please select your BloodGroup">
                <Option value="APOSITIVE">A+</Option>
                <Option value="ANEGATIVE">A-</Option>
                <Option value="BPOSITIVE">B+</Option>
                <Option value="BNEGATIVE">B-</Option>
                <Option value="ABPOSITIVE">AB+</Option>
                <Option value="ABNEGATIVE">AB-</Option>
                <Option value="OPOSITIVE">O+</Option>
                <Option value="ONEGATIVE">O-</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="employment"
              label="Employment"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your Employment!",
                },
              ]}
            >
              <Select placeholder="Please select your employment">
                <Option value="unemployed">Unemployed</Option>
                <Option value="employed">Employed</Option>
                <Option value="self-emplyed">Self-Employed</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Dependent"
              name="dependent"
              rules={[
                {
                  required: true,
                  message: "Please put your number of dependents",
                },
              ]}
            >
              <InputNumber
                placeholder="Number Of Dependents"
                min={1}
                max={10}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Annual Income"
              name="annualIncome"
              rules={[
                {
                  required: true,
                  message: "Please put your Annual Income",
                },
              ]}
            >
              <InputNumber
                placeholder="Annual Income"
                min={5000}
                max={10000000000000}
                step={5000}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="OtherIncome"
              name="otherIncome"
              rules={[
                {
                  required: true,
                  message: "Please put your Income",
                },
              ]}
            >
              <Input placeholder="Other Source of Income" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Health History"
              name="healthHistory"
              rules={[
                {
                  required: true,
                  message: "Please fill your healthHistory",
                },
              ]}
            >
              <Input placeholder="Health History" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Family History"
              name="familyHistory"
              rules={[
                {
                  required: true,
                  message: "Please fill your family history",
                },
              ]}
            >
              <>
                <TextArea rows={4} placeholder="Family History" maxLength={6} />
              </>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Existing Insurance"
              name="existingInsurance"
              rules={[
                {
                  required: true,
                  message: "Please fill your Existing Insurance",
                },
              ]}
            >
              <>
                <TextArea
                  rows={3}
                  placeholder="Existing Insurance"
                  maxLength={6}
                />
              </>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="smoking"
              label="Smoking"
              rules={[
                {
                  required: true,
                  message: "Please Select either of the values!",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button value="no">No</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="policyTerm" label="Policy Term">
              <Slider
                onChange={onSlide}
                value={typeof inputValue === "number" ? inputValue : 0}
                min={3}
                max={18}
                step={3}
                marks={{
                  3: "3M",
                  6: "6M",
                  9: "9M",
                  12: "12M",
                  15: "2Y",
                  18: "3Y",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Submit Button (Centered) */}
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Create Vehicle Policy
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default HealthPolicyForm;
