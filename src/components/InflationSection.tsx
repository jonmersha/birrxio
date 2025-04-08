import React from 'react';
import InflationCard from './InflationCard';

const InflationSection = () => {
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
        <h2 style={titleStyle}>Ethiopian Inflation Data and Trends</h2>
        <div style={containerStyle}>
          <InflationCard
            title="Current Inflation Rates"
            description="Stay informed about the latest inflation figures impacting the Ethiopian economy."
            bgColor="#3b82f6"
          />
          <InflationCard
            title="Historical Inflation Trends"
            description="Analyze past inflation trends to better understand economic patterns."
            bgColor="#10b981"
          />
          <InflationCard
            title="Expert Insights"
            description="Gain insights from economists on the factors driving inflation in Ethiopia."
            bgColor="#f59e0b"
          />
        </div>
      </div>
    </section>
  );
};

export default InflationSection;