import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import axios from "axios";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const adminResponse = await axios.get(
        "http://localhost:8080/eInsurance/admin/getAllAdmins"
      );

      const userResponse = await axios.get(
        "http://localhost:8080/eInsurance/user/getAllUsers"
      );

      const adminData = adminResponse.data;
      const userData = userResponse.data;

      const combinedData = [...adminData, ...userData];

      setUserData(combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const [initialUserData, setInitialUserData] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setInitialUserData({ ...user });
    setIsModalVisible(true);
  };

  const handleDelete = async (user) => {
    try {
      console.log("Deleting user:", user);
      if (user.role === "ADMIN") {
        // Delete admin
        await axios.delete(
          `http://localhost:8080/eInsurance/admin/deleteAdmin/${user.adminId}`
        );
      } else if (user.role === "CUSTOMER") {
        // Delete user
        await axios.delete(
          `http://localhost:8080/eInsurance/user/deleteUser/${user.id}`
        );
      }

      // Refresh the user data after deletion
      fetchData();
      alert("Successfully Deleted User");
      console.log("Delete user:", user);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleModalCancel = () => {
    setSelectedUser(null);
    setIsModalVisible(false);
  };

  const handleModalOk = async () => {
    try {
      const endpoint =
        selectedUser.role === "ADMIN"
          ? `http://localhost:8080/eInsurance/admin/editAdmin/${selectedUser.adminId}`
          : `http://localhost:8080/eInsurance/user/editUser/${selectedUser.id}`;

      // Check if any field has been modified
      const hasChanges = Object.keys(selectedUser).some(
        (key) => initialUserData[key] !== selectedUser[key]
      );

      if (!hasChanges) {
        alert("Fields same, no change");
        setIsModalVisible(false);
        return; // Exit the function if no changes are made
      }

      const response = await axios.put(endpoint, selectedUser);
      alert("Successfully Edited User");
      console.log("Edit user response:", response.data);

      // Refresh the user data after editing
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div>
      <Table columns={columns} dataSource={userData} />
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        {selectedUser && (
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
            <Form.Item label="Username">
              <Input
                value={selectedUser.username}
                onChange={(e) =>
                  setSelectedUser((prevUser) => ({
                    ...prevUser,
                    username: e.target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Full Name">
              <Input
                value={selectedUser.fullName}
                onChange={(e) =>
                  setSelectedUser((prevUser) => ({
                    ...prevUser,
                    fullName: e.target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser((prevUser) => ({
                    ...prevUser,
                    email: e.target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Contact Number">
              <Input
                value={selectedUser.contactNumber}
                onChange={(e) =>
                  setSelectedUser((prevUser) => ({
                    ...prevUser,
                    contactNumber: e.target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Address">
              <Input
                value={selectedUser.address}
                onChange={(e) =>
                  setSelectedUser((prevUser) => ({
                    ...prevUser,
                    address: e.target.value,
                  }))
                }
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default UserTable;
