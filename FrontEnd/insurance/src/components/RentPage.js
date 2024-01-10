import React from "react";
import Header from "./Header";
import "../CSS/HealthInfo.css";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
// import R1 from "../images/R1.png";
import R2 from "../images/R4.jpg";
import R3 from "../images/R3.png";
import R4 from "../images/R4.jpg";
import R5 from "../images/R5.jpg";

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
              <img src={R5} style={{ width: '100%', height: '700px' }} alt="Image 1" />
            </div>
            <div>
              <img src={R2} style={{ width: '100%', height: '700px' }} alt="Image 1" />
            </div>
            <div>
              <img src={R3} />
            </div>
            <div>
              <img src={R4} style={{ width: '100%', height: '700px' }} alt="Image 1" />
            </div>
          </Carousel>
        </div>
        <div className="col-6" style={{ height: "600px", overflowY: "scroll" }}>
          <div className="info-page-container">
            <h1 className="info-page-heading">Rent Insurance Information</h1>
            <div className="info-content">
              <p>
                Renters insurance is a form of coverage that safeguards the belongings and liability of individuals renting a home or apartment. It offers protection against potential losses due to theft, fire, vandalism, or other unforeseen events. In addition to covering personal property, renters insurance may include liability coverage for incidents that occur within the rented property, like accidental damage to a neighbor's property or injuries to visitors. It provides a sense of security for renters, ensuring financial assistance in the face of unexpected events.
              </p>
              <h2>Benefits of Renter's Insurance</h2>
              <ul>
                <li>
                  Financial Protection: Renters insurance helps safeguard you from unexpected expenses related to theft, damage, or liability within your rented space.
                </li>
                <li>
                  Renter's Insurance Coverage: It offers protection for personal belongings, liability, and potential damages within the rented property or apartment.
                </li>
                <li>
                  Renters Insurance Coverage: Many renters insurance policies offer coverage for preventive measures such as protecting your belongings from potential risks like theft, fire, or damage. These policies help safeguard your possessions, providing peace of mind against unexpected events.
                </li>
                <li>
                  Renter's Insurance Coverage: Renter's insurance typically offers protection for your personal belongings and liability within your rented property.
                </li>
              </ul>
              <h2>How Does Renter's Insurance Work?</h2>
              <p>
                When you have renters insurance, you pay a monthly premium to your insurance provider. In return, the insurance company helps cover the costs of your personal belongings and provides liability coverage based on the terms of your policy. If your possessions are damaged or stolen due to covered perils like fire, theft, or vandalism, renters insurance can assist in replacing or repairing those items. Additionally, if someone is injured in your rented property, renters insurance may help cover legal or medical expenses, up to the policy's limits and conditions.
              </p>
              <h2>Choosing the Right Renter's Insurance Plan</h2>
              <p>
                Selecting the right renters insurance plan tailored to your lifestyle and requirements is crucial. Take into account various factors such as coverage specifics, monthly premiums, deductibles, and the network of covered incidents when making your choice. Ensuring that your renters insurance aligns with your possessions, potential risks, and personal budget will provide the peace of mind you deserve.
              </p>
              <h2>Get Insured Today</h2>
              <p>
                Don't wait until an unexpected event occurs to consider renters insurance. Safeguard yourself and your belongings by exploring the various renters insurance options available. Choose a plan that fits your needs to protect your rented space and personal possessions. Being proactive with renters insurance can offer peace of mind and financial security in the face of unforeseen circumstances.
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
                    </Button></Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentPage;
