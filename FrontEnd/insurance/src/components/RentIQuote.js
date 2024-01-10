import React, { useState } from "react";
import ApiService from "../Services/ApiService";
import Recommender from "./Recommender";
import Quotation from "./Quotation";
import { useSelector, useDispatch } from "react-redux";
import { set, release } from "../redux/PackageSlice";
import { setQuote, releaseQuote } from "../redux/QuotationSlice";
import { useNavigate } from "react-router-dom";

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

function disabledDate(current) {
  // Can not select days before today and today
  return current && current.valueOf() < Date.now();
}

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const RentIQuote = () => {
  const [inputValue, setInputValue] = useState(3);
  const [flag, setFlag] = useState("false");
  const [response, setResponse] = useState("");

  const onSlide = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  const [modal, contextHolder] = Modal.useModal();
  // const confirm = () => {
  //   modal.confirm({
  //     // title: "Confirm",
  //     // content: "Bla bla ...",
  //     okText: "Ok",
  //     // cancelText: '取消',
  //   });
  // };

  const dispatch = useDispatch();
  const val = useSelector((state) => state.package);
  const val1 = useSelector((state) => state.quote);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", JSON.stringify(values));
    var packages = Quotation.getRenterQuote(values);
    console.log(packages);
    const pack = await Recommender.fetchRent(
      values,
      packages.Premium,
      packages.Super,
      packages.Basic
    );
    console.log(pack);
    dispatch(set({ packages, pack }));
    dispatch(setQuote({ values }));
    console.log(val);
    console.log(val1);
    navigate("/packagerent");
  };

  return (
    <>
      {/* <div className="row" style={{ alignContent: "center" }}>
      <div className="text-center"> */}
      {contextHolder}

      <Row type="flex" justify="center" align="center">
        <Col span={10}>
          <div style={{ marginTop: "8rem", paddingLeft: "8px" }}>
            <Form
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
              <Form.Item label="Insurance Category">
                <span className="ant-form-text">Renter's Insurance</span>
              </Form.Item>
              {/*<Form.Item*/}
              {/*    label="Property Type"*/}
              {/*    name="propertyType"*/}
              {/*    rules={[{ required: true, max: 50, message: 'Please input property type!' }]}*/}
              {/*>*/}
              {/*    <Input />*/}
              {/*</Form.Item>*/}

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
                <InputNumber
                  placeholder="Number Of Bathrooms"
                  min={1}
                  max={10}
                />
              </Form.Item>

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
                <InputNumber
                  placeholder="Number Of Bedrooms"
                  min={1}
                  max={10}
                />
              </Form.Item>

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
                <InputNumber
                  placeholder="Number Of Occupants"
                  min={1}
                  max={10}
                />
              </Form.Item>

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

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Get Quote
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RentIQuote;
