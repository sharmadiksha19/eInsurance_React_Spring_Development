import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const UserManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTableUpdated, setTableUpdated] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const redirectToUserForm = () => {
    navigate.push("/user-form");
  };

  const handleUserAdded = () => {
    setTableUpdated(!isTableUpdated);
    setIsModalVisible(false);
  };

  return (
    <div style={{ marginLeft: "90px", alignContent: "center" }}>
      <Button
        type="primary"
        onClick={showModal}
        style={{ marginBottom: "20px" }}
      >
        Add User
      </Button>

      <Modal
        title="Add User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <UserForm onUserAdded={handleUserAdded} />
      </Modal>

      <UserTable key={isTableUpdated} />
    </div>
  );
};

export default UserManagement;
