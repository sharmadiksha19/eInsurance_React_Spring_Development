import React from "react";
import Header from "./Header";
import "../CSS/HealthInfo.css";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import H2 from "../images/H2.jpg";
import H9 from "../images/H9.png";
import H5 from "../images/H5.jpg";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function HealthPage() {
  return (
    <>
      <Header />
      <div className="row" style={{ marginTop: "8rem", paddingLeft: "8px" }}>
        <div className="col-6 ml-4">
          <Carousel autoplay>
            <div>
              {/*<h3 style={contentStyle}>1</h3>*/}
              <img
                src={H2}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              {/*<h3 style={contentStyle}>2</h3>*/}
              <img
                src={H5}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              {/*<h3 style={contentStyle}>3</h3>*/}
              <img
                src={H2}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              {/*<h3 style={contentStyle}>4</h3>*/}
              <img
                src={H9}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
          </Carousel>
        </div>
        <div className="col-6" style={{ height: "600px", overflowY: "scroll" }}>
          <div className="info-page-container">
            <h1 className="info-page-heading">Health Insurance Information</h1>
            <div className="info-content">
              <p>
                Health insurance is a type of insurance coverage that pays for
                medical and surgical expenses incurred by the insured. It can
                also provide coverage for other types of health-related
                services, such as prescription drugs, mental health services,
                and preventive care.
              </p>
              <h2>Benefits of Health Insurance</h2>
              <ul>
                <li>
                  Financial Protection: Health insurance helps protect you from
                  high medical costs.
                </li>
                <li>
                  Access to Healthcare: It provides access to a network of
                  doctors, hospitals, and healthcare providers.
                </li>
                <li>
                  Preventive Services: Many health insurance plans cover
                  preventive services like vaccinations and screenings.
                </li>
                <li>
                  Prescription Drug Coverage: Health insurance often includes
                  coverage for prescription medications.
                </li>
              </ul>
              <h2>How Does Health Insurance Work?</h2>
              <p>
                When you have health insurance, you pay a monthly premium to
                your insurance provider. In return, the insurance company helps
                cover the costs of your medical expenses based on the terms of
                your policy.
              </p>
              <h2>Choosing the Right Health Insurance Plan</h2>
              <p>
                It's important to choose a health insurance plan that meets your
                needs and budget. Consider factors such as coverage, premiums,
                deductibles, and network providers when selecting a plan.
              </p>
              <h2>Get Insured Today</h2>
              <p>
                Don't wait until you need medical care to get health insurance.
                Protect yourself and your family by exploring available health
                insurance options and choosing a plan that suits your
                requirements.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/*<Button type="primary" htmlType="submit">*/}
                <Link to="/quotes">
                  <Button type="primary" htmlType="submit">
                    Get Quotes
                  </Button>
                </Link>
                {/*</Button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthPage;
