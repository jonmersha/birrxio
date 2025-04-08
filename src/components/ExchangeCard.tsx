import React from "react";
interface ExchangeRateCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const ExchangeRateCard: React.FC<ExchangeRateCardProps> = ({
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      style={{
        // backgroundColor: 'white',
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        flex: "1",
        margin: "10px",
        minWidth: "250px",
        maxWidth: "320px",
        backgroundColor: bgColor,
      }}
    >
      <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{title}</h4>
      <p style={{ fontSize: "1rem", color: "#333" }}>{description}</p>
    </div>
  );
};

export default ExchangeRateCard;
