import React, { useState } from "react";
import { Table, Button, Input, Form, Spin, Alert } from "antd";
import "./PolicyTable.css"; // Import the CSS file
import "../Policy.css";

const PolicyTable = () => {
  const [form] = Form.useForm();
  const [healthData, setHealthData] = useState([]);
  const [renterData, setRenterData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/eInsurance/customer/${values.username}`
      );
      const customerData = await response.json();

      setHealthData(customerData.healthPolicies || []);
      setRenterData(customerData.rentersPolicies || []);
      setVehicleData(customerData.vehiclePolicies || []);

      setError(null);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setHealthData([]);
      setRenterData([]);
      setVehicleData([]);
      setError("Error fetching customer data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderTable = (columns, data, title) => {
    return (
      <>
        <h2>{title}</h2>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          scroll={{ x: true }}
        />
      </>
    );
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="inline">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      {loading && <Spin />}
      {error && <Alert message={error} type="error" />}
      {healthData.length > 0 &&
        renderTable(
          getColumns(healthData),
          healthData,
          "Health Policies",
          "health-table"
        )}
      {renterData.length > 0 &&
        renderTable(
          getColumns(renterData),
          renterData,
          "Renter Policies",
          "renter-table"
        )}
      {vehicleData.length > 0 &&
        renderTable(
          getColumns(vehicleData),
          vehicleData,
          "Vehicle Policies",
          "vehicle-table"
        )}
    </div>
  );
};

const getColumns = (data) => {
  return Object.keys(data[0] || {}).map((key) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    dataIndex: key,
    key: key,
    width: "20%", // Allow the column to adjust its width based on content
  }));
};

export default PolicyTable;
