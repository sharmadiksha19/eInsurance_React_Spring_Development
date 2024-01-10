import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Card } from "antd";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const { Content } = Layout;

const Dashboard = () => {
  const [insuranceData, setInsuranceData] = useState({
    Customer: 0,
    health: 0,
    rent: 0,
    vehicle: 0,
  });

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/eInsurance/admin/getData"
        );
        setInsuranceData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once after the component mounts

  const eInsuranceData = [insuranceData]; // Wrap the data in an array for bar chart

  return (
    <div>
      <Layout style={{ width: "100%" }}>
        <Content style={{ padding: "10px" }}>
          <Card>ADMIN DASHBOARD</Card>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Number of Customers">
                <p>{insuranceData.Customer}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Health Policies">
                <p>{insuranceData.health}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Renter Policies">
                <p>{insuranceData.rent}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Vehicle Policies">
                <p>{insuranceData.vehicle}</p>
              </Card>
            </Col>
          </Row>
          <Card title="Bar Chart" style={{ marginTop: "16px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eInsuranceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="health" fill="#82ca9d" name="Health Policy" />
                <Bar dataKey="rent" fill="#ffc658" name="Renter Policy" />
                <Bar dataKey="vehicle" fill="#ff7300" name="Vehicle Policy" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Content>
      </Layout>
    </div>
  );
};

export default Dashboard;
