import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Slider,
} from "antd";
import axios from "axios"; // Import Axios

const { Option } = Select;
const { TextArea } = Input;

const RentersPolicyForm = () => {
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
          `http://localhost:8080/eInsurance/customer/rentersPolicy/${username}`
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
              label="Property Type"
              name="propertyType"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please Enter Property Type!",
                },
              ]}
            >
              <Select placeholder="Please select your Property">
                <Option value="ApartmentCondo">Apartment/Condo</Option>
                <Option value="SingleFamilyHome">Single Family Home</Option>
                <Option value="Townhouse">Townhouse</Option>
                <Option value="StudentHousing">Student Housing</Option>
                <Option value="VacationRental">Vacation Rental</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Second Column */}
          <Col span={12}>
            <Form.Item
              label="Property Value"
              name="estimatedPropertyValue"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please input estimated property value!",
                },
              ]}
            >
              <InputNumber
                placeholder="Value"
                min={5000}
                max={10000000000000}
                step={10000}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Pets"
              name="Pets"
              rules={[
                {
                  required: true,
                  message: "Please put your number of Pets",
                },
              ]}
            >
              <InputNumber placeholder="Number Of Pets" min={1} max={10} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Pet Details"
              name="PetDetails"
              rules={[
                {
                  required: true,
                  message: "Please fill your Pet Details",
                },
              ]}
            >
              <>
                <TextArea rows={4} placeholder="Pet Details" maxLength={6} />
              </>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Bathrooms"
              name="NoOfBathrooms"
              rules={[
                {
                  required: true,
                  message: "Please put your number of Bathrooms",
                },
              ]}
            >
              <InputNumber placeholder="Number Of Bathrooms" min={1} max={10} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bedrooms"
              name="NoOfBedrooms"
              rules={[
                {
                  required: true,
                  message: "Please put your number of Bedrooms",
                },
              ]}
            >
              <InputNumber placeholder="Number Of Bedrooms" min={1} max={10} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Occupants"
              name="NoOfOccupants"
              rules={[
                {
                  required: true,
                  message: "Please put your number of Occupants",
                },
              ]}
            >
              <InputNumber placeholder="Number Of Occupants" min={1} max={10} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Property Address"
              name="propertyAddress"
              rules={[
                {
                  required: true,
                  message: "Please fill your correct Property Address",
                },
              ]}
            >
              <>
                <TextArea
                  rows={4}
                  placeholder="Property Address"
                  maxLength={6}
                />
              </>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Property Value"
              name="estimatedPropertyValue"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please input estimated property value!",
                },
              ]}
            >
              <InputNumber
                placeholder="Value"
                min={100}
                max={10000000000000}
                step={100}
              />
            </Form.Item>
          </Col>
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

export default RentersPolicyForm;
