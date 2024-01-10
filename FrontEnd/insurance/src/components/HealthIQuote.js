import { useState } from "react";
import React, { createContext } from "react";
import Recommender from "./Recommender";
import Quotation from "./Quotation";
import { useSelector, useDispatch } from "react-redux";
import { set, release } from "../redux/PackageSlice";
import { setQuote, releaseQuote } from "../redux/QuotationSlice";
import Header from "./Header";
import ApiService from "../Services/ApiService";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Slider,
} from "antd";
import { Navigate, redirect } from "react-router-dom";

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

const QuoteForm = () => {
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
    var packages = Quotation.getHealthQuote(values);
    console.log(packages);
    const pack = await Recommender.fetch(
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
    navigate("/package");

    // ApiService.savePrescription(values)
    //     .then((response) => {
    //       modal.success({
    //         title: "Congratulations!!! You have a quotation ready",
    //         content: response.data + " Per Month.",
    //       });
    //     })
    //     .catch((error) => {
    //       modal.warning({ content: error.data });
    //     });
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
              name="validate_other"
              {...formItemLayout}
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
                <span className="ant-form-text">Health Insurance</span>
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your First name and Last name!",
                  },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                type="email"
                rules={[
                  {
                    required: true,
                    message: "Please put your email Id",
                  },
                ]}
              >
                <Input placeholder="Email ID" />
              </Form.Item>

              <Form.Item name="dob" label="Date Of Birth">
                <DatePicker />
              </Form.Item>

              <Form.Item
                label="Height"
                name="height"
                rules={[
                  {
                    required: true,
                    message: "Please put your height",
                  },
                ]}
              >
                <Input placeholder="Height in CM" />
              </Form.Item>

              <Form.Item
                label="Weight"
                name="weight"
                rules={[
                  {
                    required: true,
                    message: "Please put your Weight",
                  },
                ]}
              >
                <Input placeholder="Weight in KG" />
              </Form.Item>

              <Form.Item
                name="bloodGroup"
                label="BloodGroup"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please put your BloodGroup!",
                  },
                ]}
              >
                <Select placeholder="Please select your BloodGroup">
                  <Option value="APOSITIVE">A+</Option>
                  <Option value="ANEGATIVE">A-</Option>
                  <Option value="BPOSITIVE">B+</Option>
                  <Option value="BNEGATIVE">B-</Option>
                  <Option value="ABPOSITIVE">AB+</Option>
                  <Option value="ABNEGATIVE">AB-</Option>
                  <Option value="OPOSITIVE">O+</Option>
                  <Option value="ONEGATIVE">O-</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="employment"
                label="Employment"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your Employment!",
                  },
                ]}
              >
                <Select placeholder="Please select your employment">
                  <Option value="unemployed">Unemployed</Option>
                  <Option value="employed">Employed</Option>
                  <Option value="self-emplyed">Self-Employed</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Dependent"
                name="dependent"
                rules={[
                  {
                    required: true,
                    message: "Please put your number of dependents",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Number Of Dependents"
                  min={1}
                  max={10}
                />
              </Form.Item>

              <Form.Item
                label="Annual Income"
                name="annualIncome"
                rules={[
                  {
                    required: true,
                    message: "Please put your Annual Income",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Annual Income"
                  min={5000}
                  max={10000000000000}
                  step={5000}
                />
              </Form.Item>

              <Form.Item
                label="OtherIncome"
                name="otherIncome"
                rules={[
                  {
                    required: true,
                    message: "Please put your Income",
                  },
                ]}
              >
                <Input placeholder="Other Source of Income" />
              </Form.Item>

              <Form.Item
                label="Health History"
                name="healthHistory"
                rules={[
                  {
                    required: true,
                    message: "Please fill your healthHistory",
                  },
                ]}
              >
                <Input placeholder="Health History" />
              </Form.Item>

              <Form.Item
                label="Family History"
                name="familyHistory"
                rules={[
                  {
                    required: true,
                    message: "Please fill your family history",
                  },
                ]}
              >
                <>
                  <TextArea
                    rows={4}
                    placeholder="Family History"
                    maxLength={6}
                  />
                </>
              </Form.Item>

              <Form.Item
                label="Existing Insurance"
                name="existingInsurance"
                rules={[
                  {
                    required: true,
                    message: "Please fill your Existing Insurance",
                  },
                ]}
              >
                <>
                  <TextArea
                    rows={3}
                    placeholder="Existing Insurance"
                    maxLength={6}
                  />
                </>
              </Form.Item>

              <Form.Item
                name="smoking"
                label="Smoking"
                rules={[
                  {
                    required: true,
                    message: "Please Select either of the values!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value="yes">Yes</Radio.Button>
                  <Radio.Button value="no">No</Radio.Button>
                </Radio.Group>
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

export default QuoteForm;
