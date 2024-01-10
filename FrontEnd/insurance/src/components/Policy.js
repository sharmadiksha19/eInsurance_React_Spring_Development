import React, { useState, useContext, useEffect } from "react";
import Header from "./Header.js";
// import Context from "../Context.js";
import "./Policy.css";
import { useSelector, useDispatch } from "react-redux";
import { setCustomer, releaseCustomer } from "../redux/CustomerSlice";
import ApiService from "../Services/ApiService";

import customerImage from "../images/profile.png";
import { Col, Row } from "antd";

function Policy() {
  // let customer = useSelector((state) => state.customer);
  let flag = true;
  // useSelector((state) => state.customer);
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [customer, setCustomer] = useState([]);

  async function fetchData() {
    try {
      const response = await ApiService.customerGet(user.user.username); // Call the signIn method from ApiService
      console.log("customer Fetched Successfully:", response.data);

      if (response.status === 200) {
        // dispatch(setCustomer({ customer }));
        // const customer1 = useSelector((state) => state.customer.customer);
        setCustomer(response.data);
        console.log(customer);
      } else {
        console.log("Failed to Fetch Customer");
      }

      // Redirect logic or token storage can be placed here after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (e.g., display error message)
    }

    //Axios call updating the customer;
  }

  useEffect(() => {
    fetchData();
    renderPolicyRows();
  }, [flag]);

  // const {customer, setCustomer} = useContext(Context);
  console.log(customer);
  console.log(customer.healthPolicies);
  flag = false;
  const renderPolicyRows = (policyType) => {
    if (customer[policyType] && customer[policyType].length > 0) {
      return customer[policyType].map((policy) => (
        <tr
          key={
            policy.healthPolicyId ||
            policy.rentersPolicyId ||
            policy.vehiclePolicyId
          }
        >
          <td>{customer.customerId}</td>
          <td>{customer.firstName}</td>
          <td>
            {policyType === "healthPolicies"
              ? "Health Policy"
              : policyType === "rentersPolicies"
              ? "Renter Policy"
              : "Vehicle Policy"}
          </td>
          <td>
            {policy.healthPolicyId ||
              policy.rentersPolicyId ||
              policy.vehiclePolicyId}
          </td>
          <td>{customer.gender}</td>
        </tr>
      ));
    }
    return null;
  };

  return (
    <>
      <Header></Header>
      {/*<div className="box-container">*/}
      <div style={{ marginTop: "8rem", paddingLeft: "8px" }}>
        <Row type="flex" justify="center" align="center">
          <Col style={{ width: "80rem" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>CustomerID</th>
                  <th>Name</th>
                  <th>Policy Name</th>
                  <th>Policy ID</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {renderPolicyRows("healthPolicies")}
                {renderPolicyRows("rentersPolicies")}
                {renderPolicyRows("vehiclePolicies")}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
      {/*</div>*/}
    </>
  );
}
export default Policy;
