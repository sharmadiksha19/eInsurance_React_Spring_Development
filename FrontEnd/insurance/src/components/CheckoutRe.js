import React, { useState, useContext, useEffect } from "react";
import Header from "./Header.js";
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
import { setPackage, releasePackage } from "../redux/ChosenSlice";
import { useSelector, useDispatch } from "react-redux";
import ApiService from "../Services/ApiService.js";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const chosen = useSelector((state) => state.chosenPackage);
  const quot = useSelector((state) => state.quote);
  const packagedetails = useSelector((state) => state.package);
  let id = "";

  const [quotation, setQuotation] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vin: "",
    drivingLicenseNumber: "",
    vehicleUsage: "",
    mileage: "",
    licensePlateNumber: "",
    safetyFeatures: "",
    date: "",
    paymentAmount: "",
    paymentMethod: "",
  });

  /*LicensePlateNo
: 
"123456"
Mileage
: 
3000
Model
: 
"x"
Vin
: 
"1234567"
Year
: 
2000
carManufacturer
: 
"Toyota"
drivingLicenseNo
: 
"123456"
policyTerm
: 
9
safetyFeatures
: 
"yes"
vehicleUsage
: 
"PERSONAL"*/

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const TodaysDate = new Date();
  const formattedDate = formatDate(TodaysDate);

  //   useEffect(() => {
  //     console.log();
  //   }, []);

  const { TextArea } = Input;
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const paymentMethod = "Credit Card";

  //   const orders = quot
  //     ? quot.map((quot) => ({
  //         ...quot,
  //         ...user.username, //cust id
  //         formattedDate,
  //         price,
  //         paymentMethod,
  //       }))
  //     : [];

  const onFinish = async (values) => {
    let price = "";
    if (chosen.chosenPackage === "Basic") {
      price = packagedetails.basic;
    } else if (chosen.chosenPackage === "Premium") {
      price = packagedetails.premium;
    } else {
      price = packagedetails.super;
    }

    setQuotation({
      ...quotation,
      vehicleMake: quot.quote.carManufacturer,
      vehicleModel: quot.quote.Model,
      vehicleYear: quot.quote.Year,
      vin: quot.quote.Vin,
      drivingLicenseNumber: quot.quote.drivingLicenseNo,
      vehicleUsage: quot.quote.vehicleUsage,
      mileage: quot.quote.Mileage,
      licensePlateNumber: quot.quote.LicensePlateNo,
      safetyFeatures: quot.quote.safetyFeatures === "yes" ? "true" : "false",
      date: TodaysDate,
      paymentAmount: price,
      paymentMethod: "Credit Card",

      // employement: quot.quote.employment,
      // height: quot.quote.height,
      // weight: quot.quote.weight,
      // bloodGroup: quot.quote.bloodGroup,
      // dependent: quot.quote.dependent,
      // annualIncome: quot.quote.annualIncome,
      // otherSourceOfIncome: quot.quote.otherIncome,
      // healthHistory: quot.quote.healthHistory,
      // familyMedicalHistory: quot.quote.familyHistory,
      // existingInsuranceDetails: quot.quote.existingInsurance,
      // smoking: quot.quote.smoking === "yes" ? "true" : "false",
      // date: formattedDate,
      // paymentAmount: price,
      // paymentMethod: "Credit Card",
    });

    console.log("Received values of form: ", JSON.stringify(values));
    console.log(user.user.username);
    console.log(price);
    console.log(quot);
    console.log(quotation);
    id = user.user.username;

    try {
      const response = await ApiService.createRePolicy({ quotation }, { id }); // Call the signIn method from ApiService
      console.log("Login response:", response.data);
      alert("Policy Created : " + response.data);
      navigate("/home");

      if (response.status === 200) {
      } else {
        console.log("login was not successful");
      }

      // Redirect logic or token storage can be placed here after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "10rem", textAlign: "center" }}>
        <h1>Payment Details</h1>
      </div>
      <Row type="flex" justify="center" align="center">
        <Col span={10}>
          <div
            style={{ marginTop: "4rem", paddingLeft: "8px" }}
            className="form-container"
          >
            <Form
              className="checkout-form"
              {...formItemLayout}
              name="renters_policy_form"
              onFinish={onFinish}
              initialValues={{
                "input-number": 3,
                "checkbox-group": ["A", "B"],
                rate: 3.5,
                "color-picker": null,
              }}
              style={{
                maxWidth: 600,
              }}
            >
              {/*<Form.Item*/}
              {/*    label="Property Type"*/}
              {/*    name="propertyType"*/}
              {/*    rules={[{ required: true, max: 50, message: 'Please input property type!' }]}*/}
              {/*>*/}
              {/*    <Input />*/}
              {/*</Form.Item>*/}

              <Form.Item
                className="checkout-form"
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <>
                  <Input placeholder="Name" />
                </>
              </Form.Item>

              <Form.Item
                className="checkout-form"
                label="Street"
                name="Street"
                rules={[
                  {
                    required: true,
                    message: "Please enter your street",
                  },
                ]}
              >
                <>
                  <Input placeholder="Street" />
                </>
              </Form.Item>

              <Form.Item
                className="checkout-form"
                label="City"
                name="City"
                rules={[
                  {
                    required: true,
                    message: "Please enter your city",
                  },
                ]}
              >
                <>
                  <Input placeholder="City" />
                </>
              </Form.Item>

              <Form.Item
                className="checkout-form"
                label="State"
                name="State"
                rules={[
                  {
                    required: true,
                    message: "Please enter your State",
                  },
                ]}
              >
                <>
                  <Input placeholder="State" />
                </>
              </Form.Item>

              <Form.Item
                className="checkout-form"
                label="ZipCode"
                name="ZipCode"
                rules={[
                  {
                    required: true,
                    message: "Please enter your ZipCode",
                  },
                ]}
              >
                <>
                  <Input placeholder="Zipcode" />
                </>
              </Form.Item>

              <Form.Item
                className="checkout-form"
                label="Credit Card No,"
                name="creditCardno"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Credit Card Number",
                  },
                ]}
              >
                <>
                  <Input placeholder="Credit Card Number" />
                </>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Checkout
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Checkout;
