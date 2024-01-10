import React from "react";
import { Card, Typography } from "antd";
import "./AIDisplay.css";
import Header from "./Header";

const { Title, Text } = Typography;

const AIDisplay = () => {
  return (
    <>
      <Header />
      <div
        className="decision-making-container"
        style={{ marginTop: "1rem", paddingLeft: "8px" }}
      >
        <div className="centered-content">
          <h2>Decision-Making Logic and Abilities</h2>
          <div className="decision-making-cards">
            <DecisionCard title="Pattern Recognition">
              I identify patterns in the input data, including language and
              context in a conversation.
            </DecisionCard>

            <DecisionCard title="Contextual Understanding">
              I strive to understand the context by considering previous inputs
              and outputs in the dialogue.
            </DecisionCard>

            <DecisionCard title="Statistical Inference">
              I make predictions based on statistical associations in the
              training data, reflecting common language patterns.
            </DecisionCard>

            <DecisionCard title="No Personal Bias">
              I lack personal opinions, emotions, or biases. Responses are
              generated based on data patterns without subjective judgment.
            </DecisionCard>

            <DecisionCard title="Generalization">
              I aim to generalize from training data, responding appropriately
              to a broad range of inputs, though limitations may exist.
            </DecisionCard>
          </div>
          <p>
            Note: I don't have consciousness or the ability to independently
            verify information. Use my responses as informational rather than
            authoritative. Verify information from reliable sources when
            necessary.
          </p>
        </div>
      </div>
    </>
  );
};

const DecisionCard = ({ title, children }) => {
  return (
    <Card
      title={<Title level={4}>{title}</Title>}
      className="decision-card"
      hoverable
    >
      <Text>{children}</Text>
    </Card>
  );
};

export default AIDisplay;
