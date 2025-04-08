// import HeroCard from '../components/HeroCard'
// import ExchangeRatesSection from '../components/ExchangeSection'
// import CommoditySection from '../components/CommoditySection'
// import LocalMarketContainer from '../components/LocalMarketContainer'
// import InflationSection from '../components/InflationSection'

// const Home = () => {
//   return (
//     <>
//     <HeroCard/>
//     <ExchangeRatesSection/>
//     <CommoditySection/>
//     <LocalMarketContainer/>
//     <InflationSection/>
//     </>
    
//   )
// }

// export default Home

import React, { useRef } from 'react';
import HeroCard from '../components/HeroCard';
import ExchangeRatesSection from '../components/ExchangeSection';
import CommoditySection from '../components/CommoditySection';
import LocalMarketContainer from '../components/LocalMarketContainer';
import InflationSection from '../components/InflationSection';

const Home = () => {
  // Create refs for each section
  const exchangeRef = useRef<HTMLDivElement>(null);
  const commodityRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const inflationRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => scrollToSection(exchangeRef)}
            style={{
              background: 'none',
              border: 'none',
              color: '#333',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              ':hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            Exchange Rates
          </button>
          <button 
            onClick={() => scrollToSection(commodityRef)}
            style={navButtonStyle}
          >
            Commodities
          </button>
          <button 
            onClick={() => scrollToSection(marketRef)}
            style={navButtonStyle}
          >
            Local Markets
          </button>
          <button 
            onClick={() => scrollToSection(inflationRef)}
            style={navButtonStyle}
          >
            Inflation Data
          </button>
        </div>
      </nav>

      <HeroCard/>
      
      {/* Add refs to each section */}
      <div ref={exchangeRef}>
        <ExchangeRatesSection/>
      </div>
      
      <div ref={commodityRef}>
        <CommoditySection/>
      </div>
      
      <div ref={marketRef}>
        <LocalMarketContainer/>
      </div>
      
      <div ref={inflationRef}>
        <InflationSection/>
      </div>
    </>
  );
};

// Reusable nav button style
const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#333',
  fontWeight: '600',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#f0f0f0'
  }
};

export default Home;