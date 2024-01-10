import React from "react";
import Header from "./Header";
import "../CSS/HealthInfo.css";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";

import V2 from "../images/V2.png";
import V5 from "../images/V5.png";
import V4 from "../images/V4.png";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function RentPage() {
  return (
    <>
      <Header />
      <div className="row" style={{ marginTop: "8rem", paddingLeft: "8px" }}>
        <div className="col-6 ml-4">
          <Carousel autoplay>
            <div>
              <img
                src={V5}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              <img
                src={V2}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              <img
                src={V4}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
            <div>
              <img
                src={V5}
                style={{ width: "100%", height: "600px" }}
                alt="Image 1"
              />
            </div>
          </Carousel>
        </div>
        <div className="col-6" style={{ height: "600px", overflowY: "scroll" }}>
          <div className="info-page-container">
            <h1 className="info-page-heading">Vehicle Insurance Information</h1>
            <div className="info-content">
              <p>
                Vehicle insurance is a financial protection that covers the
                costs associated with car accidents, theft, or damage to your
                vehicle. Similar to health insurance, it safeguards against
                unexpected expenses. While health insurance focuses on medical
                and healthcare-related expenses, vehicle insurance primarily
                concerns itself with the financial aspects linked to car-related
                incidents.
              </p>
              <h2>Benefits of Vehicle Insurance</h2>
              <ul>
                <li>
                  Financial Protection: Vehicle insurance helps shield you from
                  steep expenses associated with car accidents, theft, or
                  damages to your vehicle.
                </li>
                <li>
                  Access to Repair Services: It facilitates access to a network
                  of authorized mechanics, auto body shops, and repair service
                  providers.
                </li>
                <li>
                  Preventive Services: Several vehicle insurance policies offer
                  preventive services such as regular maintenance check-ups and
                  safety inspections. These services aim to ensure that your
                  vehicle is in optimal condition, minimizing the risk of
                  mechanical failures or potential issues that could lead to
                  accidents or breakdowns on the road.
                </li>
                <li>
                  Repair and Replacement Coverage: Vehicle insurance often
                  includes coverage for repair or replacement expenses incurred
                  due to accidents, damages, or theft of the insured vehicle.
                </li>
              </ul>
              <h2>How Does Vehicle Insurance Work?</h2>
              <p>
                When you have vehicle insurance, you pay a monthly premium to
                your insurance provider. In return, the insurance company
                assists in covering the costs associated with car accidents,
                theft, or damage to your vehicle as per the terms outlined in
                your policy
              </p>
              <h2>Choosing the Right Vehicle Insurance Plan</h2>
              <p>
                Selecting a vehicle insurance plan that aligns with your
                requirements and financial capacity is crucial. Factors like
                coverage options, premiums, deductibles, and the network of
                repair facilities should be considered when making your choice.
              </p>
              <h2>Get Insured Today</h2>
              <p>
                Waiting until an accident or car-related incident occurs to
                secure vehicle insurance isn't the ideal approach. Safeguard
                yourself and your loved ones by proactively exploring the
                diverse vehicle insurance options available. Take the time to
                assess and select a tailored plan that aligns with your specific
                driving needs and offers comprehensive coverage.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/quotes">
                  <Button type="primary" htmlType="submit">
                    Get Quotes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentPage;
