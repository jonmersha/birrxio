import ExchangeRateCard from './ExchangeCard';

const ExchangeRatesSection = () => {
  const sectionStyle:React.CSSProperties = {
    backgroundColor: '#124356', // Main blue background
    padding: '60px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  };

  const innerCardContainer:React.CSSProperties = {
    backgroundColor: '#AAAAAA', // Blue-balch (lighter blue shade)
    borderRadius: '12px',
    padding: '40px 30px',
    maxWidth: '1200px',
    width: '100%',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  };

  const titleStyle:React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: 'white',
  };

  const containerStyle:React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <section style={sectionStyle}>
      <div style={innerCardContainer}>
        <h2 style={titleStyle}>Real-Time Currency Exchange Rates</h2>
        <div style={containerStyle}>
          <ExchangeRateCard
            title="ETB vs. USD"
            description="Stay updated on the latest exchange rates between the Ethiopian Birr and the US Dollar. Make informed decisions for your currency conversions."
          />
          <ExchangeRateCard
            title="ETB vs. Pound & Euro"
            description="Access current exchange rates for the Ethiopian Birr against the British Pound and Euro. Essential for international transactions."
          />
          <ExchangeRateCard
            title="Other Currencies"
            description="We provide exchange rates for a wide range of global currencies against the ETB, catering to diverse informational needs."
          />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRatesSection;
