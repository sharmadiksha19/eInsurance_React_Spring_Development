import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, DatePicker, Row, Col } from "antd";
import axios from "axios"; // Import Axios

const { Option } = Select;

const VehiclePolicyForm = () => {
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
          `http://localhost:8080/eInsurance/customer/vehiclePolicy/${username}`
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
              label="Vehicle Make"
              name="vehicleMake"
              rules={[{ required: true, message: "Please enter vehicle make" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          {/* Second Column */}
          <Col span={12}>
            <Form.Item
              label="Vehicle Model"
              name="vehicleModel"
              rules={[
                { required: true, message: "Please enter vehicle model" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Vehicle Year"
              name="vehicleYear"
              rules={[{ required: true, message: "Please enter vehicle year" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="VIN"
              name="vin"
              rules={[{ required: true, message: "Please enter VIN" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Driving License Number"
              name="drivingLicenseNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter driving license number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Vehicle Usage"
              name="vehicleUsage"
              rules={[
                { required: true, message: "Please enter vehicle usage" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Mileage"
              name="mileage"
              rules={[{ required: true, message: "Please enter mileage" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="License Plate Number"
              name="licensePlateNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter license plate number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Safety Features"
              name="safetyFeatures"
              valuePropName="checked"
            >
              <Input type="checkbox" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please enter date" }]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Payment Amount"
              name="paymentAmount"
              rules={[
                { required: true, message: "Please enter payment amount" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Payment Method"
              name="paymentMethod"
              rules={[
                { required: true, message: "Please enter payment method" },
              ]}
            >
              <Input />
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

export default VehiclePolicyForm;
