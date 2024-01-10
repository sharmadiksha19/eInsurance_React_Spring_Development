import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DisplayPackages.css";
import Header from "./Header";
import { StarOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { setPackage, releasePackage, setType } from "../redux/ChosenSlice";

const { Meta } = Card;

function DisplayPackages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const init = useSelector((state) => state.quote);
  const val = useSelector((state) => state.package);
  const user = useSelector((state) => state.user);
  const chosen = useSelector((state) => state.chosenPackage);

  function buy(string) {
    dispatch(setPackage({ string }));
    dispatch(setType("Vehicle"));
    console.log(user);
    if (user.user == "") {
      navigate("/login");
    } else {
      navigate("/checkoutRe");
    }
    console.log("From Display" + string);
  }

  return (
    <>
      <Header />
      <div
        className="display-packages-container"
        style={{ marginTop: "10rem", paddingLeft: "8px" }}
      >
        {/* <Row type="flex" justify="center" align="middle">
          <div className="card-container">
            <Col span={8}>
              {val.recommendation === "Premium" && <h1>Recommended</h1>}
            </Col>
            <Col span={8}>
              {val.recommendation === "Premium" && <h1>Recommended</h1>}
            </Col>
            <Col span={8}>
              {val.recommendation === "Premium" && <h1>Recommended</h1>}
            </Col>
          </div>
        </Row> */}
        <Row type="flex" justify="center" align="middle">
          <div className="card-container">
            <Col span={8}>
              {/* {(val.recommendation === "Premium") && 
                <h1>Recommended</h1> } */}
              <Card
                onClick={() => buy("Premium")}
                hoverable
                className="package-card"
                style={{ width: 300 }} // Adjust the width as needed
                cover={
                  <img
                    alt="Europe Street beat"
                    src="https://tse3.mm.bing.net/th?id=OIP.r2YkvZ13hpdzg0Iv-D2vTgHaHa&pid=Api&P=0&h=220"
                    style={{ height: 200 }} // Adjust the height as needed
                  />
                }
              >
                <Meta title="Premium Package" />
                <Meta
                  title={"$" + val.premium}
                  description="Based on Vehicle Usage"
                />
                &nbsp;
                {val.recommendation === "Premium" && (
                  <Meta title="Recommended" />
                )}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                className="package-card"
                style={{ width: 300 }}
                onClick={() => buy("Super")}
                cover={
                  <img
                    alt="Europe Street beat"
                    src="https://1.bp.blogspot.com/-GLEVa4YmVLw/WMNb7BUMceI/AAAAAAAAKvo/R2-cePvMbzwsS6o4P7t0AySG6MUDr05rwCLcB/s1600/Super.JPG"
                    style={{ height: 200 }} // Adjust the height as needed
                  />
                }
              >
                <Meta title="Super Package" />
                <Meta title={"$" + val.super} description="Based on Mileage" />
                &nbsp;
                {val.recommendation === "Super" && <Meta title="Recommended" />}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                className="package-card"
                style={{ width: 300 }}
                onClick={() => buy("Basic")}
                cover={
                  <img
                    alt="Europe Street beat"
                    src="https://blackbirdcorporate.co.uk/wp-content/uploads/2017/11/basic-package_-300x300.png"
                    style={{ height: 200 }} // Adjust the height as needed
                  />
                }
              >
                <Meta title="Basic Package" />
                <Meta
                  title={"$" + val.basic}
                  description="Based on Safety Features"
                />
                &nbsp;
                {val.recommendation === "Basic" && <StarOutlined /> && (
                  <Meta title="Recommended" />
                )}
              </Card>
            </Col>
          </div>
        </Row>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Row type="flex" justify="center" align="middle">
          <Col span={22}>
            <Card
              title="Our AI Generated Recommendation"
              extra={<a href="/ai">More</a>}
            >
              {val.recommendation === "Basic" && (
                <p>
                  The Basic package is assumed to be designed for individuals
                  with specific lifestyle factors, such as smoking habits. In
                  insurance contexts, smoking is often considered a risk factor
                  that may affect the pricing and terms of the insurance policy.
                  Therefore, the Basic package, which is associated with the
                  smoking factor, is suggested in this case.
                </p>
              )}
              {val.recommendation === "Super" && (
                <p>
                  The Super package is suggested for individuals with certain
                  health-related factors, and the specific details would depend
                  on how the insurance packages are structured. The Super
                  package is designed to provide benefits for individuals who
                  have certain health abnormalities that may affect their
                  insurance.
                </p>
              )}
              {val.recommendation === "Premium" && (
                <p>
                  The Premium package is suggested when the individual has
                  dependents. The presence of dependents often indicates a
                  greater need for coverage and support, and the Premium package
                  is likely designed to provide comprehensive benefits suitable
                  for individuals with family responsibilities.
                </p>
              )}
            </Card>
          </Col>
        </Row>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}

export default DisplayPackages;
