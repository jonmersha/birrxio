import React, { useRef, useState, useEffect } from "react";
import HeroCard from "../components/HeroCard";
import ExchangeRatesSection from "../components/ExchangeSection";
import CommoditySection from "../components/CommoditySection";
import LocalMarketContainer from "../components/LocalMarketContainer";
import InflationSection from "../components/InflationSection";
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Declare refs
  const homeRef = useRef<HTMLElement | null>(null);
  const exchangeRef = useRef<HTMLElement | null>(null);
  const commodityRef = useRef<HTMLElement | null>(null);
  const marketRef = useRef<HTMLElement | null>(null);
  const inflationRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs = [
    { id: "home", ref: homeRef },
    { id: "exchange", ref: exchangeRef },
    { id: "commodities", ref: commodityRef },
    { id: "market", ref: marketRef },
    { id: "inflation", ref: inflationRef },
    { id: "contact", ref: contactRef },
  ];

  const scrollToSection = (
    ref: React.RefObject<HTMLElement | null>,
    section: string
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sectionRefs) {
        const top = section.ref.current?.offsetTop ?? 0;
        const height = section.ref.current?.offsetHeight ?? 0;
        if (
          window.scrollY >= top - 100 &&
          window.scrollY < top + height - 100
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "←" : "➜"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {sectionRefs.map(({ id, ref }) => (
              <button
                key={id}
                onClick={() => scrollToSection(ref, id)}
                className={`nav-button ${activeSection === id ? "active" : ""}`}
              >
                {id === "home"
                  ? "Home"
                  : id === "exchange"
                  ? "Exchange Rates"
                  : id === "commodities"
                  ? "Commodities"
                  : id === "market"
                  ? "Local Markets"
                  : id === "inflation"
                  ? "Inflation Data"
                  : "Contact"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section ref={homeRef}>
        <HeroCard />
      </section>
      <section ref={exchangeRef}>
        <ExchangeRatesSection />
      </section>
      <section ref={commodityRef}>
        <CommoditySection />
      </section>
      <section ref={marketRef}>
        <LocalMarketContainer />
      </section>
      <section ref={inflationRef}>
        <InflationSection />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
};

export default Home;
