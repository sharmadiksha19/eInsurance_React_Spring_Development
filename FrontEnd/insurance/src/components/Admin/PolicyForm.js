import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const PolicyForm = () => {
  const onFinish = (values) => {
    // Handle form submission (e.g., send data to server)
    console.log("Received values:", values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Policy Type"
        name="policyType"
        rules={[{ required: true, message: "Please select a policy type" }]}
      >
        <Select placeholder="Select Policy Type">
          <Option value="health">Health</Option>
          <Option value="renters">Renters</Option>
          <Option value="vehicle">Vehicle</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Policy Coverage"
        name="policyCoverage"
        rules={[{ required: true, message: "Please enter policy coverage" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Premium"
        name="premium"
        rules={[{ required: true, message: "Please enter premium" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Duration"
        name="duration"
        rules={[{ required: true, message: "Please enter duration" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Policy
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PolicyForm;
