import React, { useState } from "react";
import Recommender from "./Recommender";
import Quotation from "./Quotation";
import { useSelector, useDispatch } from "react-redux";
import { set, release } from "../redux/PackageSlice";
import { setQuote, releaseQuote } from "../redux/QuotationSlice";
import { useNavigate } from "react-router-dom";
import ApiService from "../Services/ApiService";

import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
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

const CarIQuote = () => {
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
    var packages = Quotation.getReQuote(values);
    console.log(packages);
    const pack = await Recommender.fetchRe(
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
    navigate("/packagere");
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
              name="Car_Insuarance_form"
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
                <span className="ant-form-text">Car Insurance</span>
              </Form.Item>

              <Form.Item
                label="Driving License No."
                name="drivingLicenseNo"
                rules={[
                  {
                    required: true,
                    message: "Please fill your Driving",
                  },
                ]}
              >
                <Input placeholder="Driving License Number" />
              </Form.Item>

              <Form.Item
                label="License Plate No."
                name="LicensePlateNo"
                rules={[
                  {
                    required: true,
                    message: "Please fill your License Plate No",
                  },
                ]}
              >
                <Input placeholder="License PLate Number" />
              </Form.Item>

              <Form.Item
                label="Mileage"
                name="Mileage"
                rules={[
                  {
                    required: true,
                    type: "number",
                    message: "Please input Miles Per Year!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Value"
                  min={1000}
                  max={10000000000000}
                  step={1000}
                />
              </Form.Item>

              <Form.Item
                name="safetyFeatures"
                label="Safety Features"
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

              <Form.Item
                label="Brand"
                name="carManufacturer"
                rules={[
                  {
                    required: true,
                    message: "Please enter Brand Name",
                  },
                ]}
              >
                <Input placeholder="Brand Name" />
              </Form.Item>

              <Form.Item
                label="Model"
                name="Model"
                rules={[
                  {
                    required: true,
                    message: "Please enter Model Name",
                  },
                ]}
              >
                <Input placeholder="Model" />
              </Form.Item>

              <Form.Item
                name="vehicleUsage"
                label="Vehicle Usage"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please enter your Usage!",
                  },
                ]}
              >
                <Select placeholder="Please select your BloodGroup">
                  <Option value="PERSONAL">PERSONAL</Option>
                  <Option value="COMMERCIAL">COMMERCIAL</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Car Make Year"
                name="Year"
                rules={[
                  {
                    required: true,
                    type: "number",
                    message: "Please enter Year",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Value"
                  min={1970}
                  max={10000000000000}
                  step={1}
                />
              </Form.Item>

              <Form.Item
                label="Vin"
                name="Vin"
                rules={[
                  {
                    required: true,
                    message: "Please enter Vehicle Identification No.",
                  },
                ]}
              >
                <Input placeholder="Vehicle Identification Number" />
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

export default CarIQuote;
