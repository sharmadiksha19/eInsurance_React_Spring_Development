import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  DashboardOutlined,
  FileAddOutlined,
  TableOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";
import PolicyManagement from "./PolicyManagement";
import UserManagement from "./UserManagement";
import HealthPolicyForm from "./HealthPolicyForm";
import RentersPolicyForm from "./RentersPolicyForm";
import VehiclePolicyForm from "./VehiclePolicyForm";

import background from "../../images/images.jpeg";
import AdminHeader from "./AdminHeader";

const { Content, Sider } = Layout;

const AdminHome = () => {
  const [contentKey, setContentKey] = useState("dashboard");

  const renderContent = () => {
    switch (contentKey) {
      case "dashboard":
        return <Dashboard />;
      case "policies":
        return <PolicyManagement />;
      case "managePolicies":
        return <PolicyManagement />;
      case "manageUsers":
        return <UserManagement />;
      case "health":
        return <HealthPolicyForm />;
      case "renters":
        return <RentersPolicyForm />;
      case "vehicle":
        return <VehiclePolicyForm />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // Perform logout logic here, e.g., clear authentication token, redirect, etc.
    console.log("Logout clicked");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminHeader />
      <Layout style={{ marginTop: "110px", marginBottom: "10px" }}>
        <Sider width={80} theme="light">
          <Menu
            mode="vertical"
            theme="light"
            selectedKeys={[contentKey]}
            onSelect={({ key }) => setContentKey(key)}
          >
            <Menu.Item key="dashboard" icon={<DashboardOutlined />} />
            <Menu.Item key="policies" icon={<TableOutlined />} />
            <Menu.SubMenu
              key="managePolicies"
              icon={<FileAddOutlined />}
              title="Manage Policies"
            >
              <Menu.Item key="health">Health Policies</Menu.Item>
              <Menu.Item key="renters">Renters Policies</Menu.Item>
              <Menu.Item key="vehicle">Vehicle Policies</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="manageUsers" icon={<UserAddOutlined />} />
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "5px",
              padding: "5px",
              minHeight: 460,
            }}
          >
            <Breadcrumb style={{ margin: "1px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>{contentKey}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              id="hero"
              className="d-flex align-items-center"
              style={{
                backgroundImage: "url(" + background + ")",
                paddingLeft: 10,
                paddingRight: 100,
                paddingTop: 20,
                minHeight: 460,
                width: "150vh",
              }}
            >
              <div color="black">{renderContent()}</div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminHome;
