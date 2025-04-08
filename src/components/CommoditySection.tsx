import CommodityCard from './CommodyCard';

const CommoditySection = () => {
  const sectionStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`, // Grain / farm bg
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  };

  const innerCardContainer = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // translucent dark bg
    borderRadius: '12px',
    padding: '40px 30px',
    maxWidth: '1200px',
    width: '100%',
    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
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
        <h2 style={titleStyle}>Ethiopian Commodity Market Updates</h2>
        <div style={containerStyle}>
          <CommodityCard
            title="Live Stock Market Data"
            description="Get real-time updates on the performance of stocks traded in the Ethiopian market."
            bgImage="https://images.unsplash.com/photo-1616627981189-f2b831484509?auto=format&fit=crop&w=600&q=60"
          />
          <CommodityCard
            title="Commodity Prices"
            description="Track prices for key commodities such as coffee, sesame, and teff, vital for understanding the Ethiopian economy."
            bgImage="https://images.unsplash.com/photo-1578683010236-d716f9a3fdfd?auto=format&fit=crop&w=600&q=60"
          />
          <CommodityCard
            title="Market Analysis"
            description="Expert analysis to help you interpret market trends and make informed investment decisions."
            bgImage="https://images.unsplash.com/photo-1539186607619-de39c220d545?auto=format&fit=crop&w=600&q=60"
          />
        </div>
      </div>
    </section>
  );
};

export default CommoditySection;
