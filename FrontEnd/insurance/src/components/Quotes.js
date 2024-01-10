import { HeartOutlined, HomeOutlined, CarOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Header from "./Header";
import HealthIQuote from "./HealthIQuote";
import CarIQuote from "./CarIQuote";
import RentIQuote from "./RentIQuote";
import { Row, Segmented } from "antd";

function Quotes() {
    const [route, setRoute] = useState("1");

    if (route === "1") {
        return (
            <>
                <Header />
                <Row type="flex" justify="center" align="center">
                    <div style={{ marginTop: "8rem", paddingLeft: "8px" }}>
                        <Segmented
                            size="large"
                            options={[
                                {
                                    label: "Car Insurance",
                                    value: "1",
                                    icon: <CarOutlined />,
                                },
                                {
                                    label: "Renter's Insurance",
                                    value: "2",
                                    icon: <HomeOutlined />,
                                },
                                {
                                    label: "Health Insurance",
                                    value: "3",
                                    icon: <HeartOutlined />,
                                },
                            ]}
                            onChange={setRoute}
                        />
                    </div>
                </Row>
                <CarIQuote />
            </>
        );
    } else if (route === "2") {
        return (
            <>
                <Header />
                <Row type="flex" justify="center" align="center">
                    <div style={{ marginTop: "8rem", paddingLeft: "8px" }}>
                        <Segmented
                            size="large"
                            options={[
                                {
                                    label: "Car Insurance",
                                    value: "1",
                                    icon: <CarOutlined />,
                                },
                                {
                                    label: "Renter's Insurance",
                                    value: "2",
                                    icon: <HomeOutlined />,
                                },
                                {
                                    label: "Health Insurance",
                                    value: "3",
                                    icon: <HeartOutlined />,
                                },
                            ]}
                            onChange={setRoute}
                        />
                    </div>
                </Row>
                <RentIQuote />
            </>
        );
    } else {
        return (
            <>
                <Header />
                <Row type="flex" justify="center" align="center">
                    <div style={{ marginTop: "8rem", paddingLeft: "8px" }}>
                        <Segmented
                            size="large"
                            options={[
                                {
                                    label: "Car Insurance",
                                    value: "1",
                                    icon: <CarOutlined />,
                                },
                                {
                                    label: "Renter's Insurance",
                                    value: "2",
                                    icon: <HomeOutlined />,
                                },
                                {
                                    label: "Health Insurance",
                                    value: "3",
                                    icon: <HeartOutlined />,
                                },
                            ]}
                            onChange={setRoute}
                        />
                    </div>
                </Row>
                <HealthIQuote />
            </>
        );
    }
}

export default Quotes;



