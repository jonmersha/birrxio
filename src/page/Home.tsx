import React, { useRef } from "react";
import HeroCard from "../components/HeroCard";
import ExchangeRatesSection from "../components/ExchangeSection";
import CommoditySection from "../components/CommoditySection";
import LocalMarketContainer from "../components/LocalMarketContainer";
import InflationSection from "../components/InflationSection";
import "./Home.css"; // Assuming you create this CSS file

const Home = () => {
  const exchangeRef = useRef<HTMLDivElement>(null);
  const commodityRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const inflationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollToSection(exchangeRef)}
            className="nav-button"
          >
            Exchange Rates
          </button>
          <button
            onClick={() => scrollToSection(commodityRef)}
            className="nav-button"
          >
            Commodities
          </button>
          <button
            onClick={() => scrollToSection(marketRef)}
            className="nav-button"
          >
            Local Markets
          </button>
          <button
            onClick={() => scrollToSection(inflationRef)}
            className="nav-button"
          >
            Inflation Data
          </button>
        </div>
      </nav>

      <HeroCard />

      <div ref={exchangeRef}>
        <ExchangeRatesSection />
      </div>
      <div ref={commodityRef}>
        <CommoditySection />
      </div>
      <div ref={marketRef}>
        <LocalMarketContainer />
      </div>
      <div ref={inflationRef}>
        <InflationSection />
      </div>
    </>
  );
};

export default Home;
