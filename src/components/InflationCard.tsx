import React from 'react';

interface InflationCardProps {
  title: string;
  description: string;
  bgImage: string;
}

const InflationCard: React.FC<InflationCardProps> = ({ title, description, bgImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        padding: '20px',
        margin: '10px',
        minWidth: '250px',
        maxWidth: '320px',
        flex: '1',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
          padding: '20px',
          borderRadius: '12px',
          height: '100%',
        }}
      >
        <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{title}</h4>
        <p style={{ fontSize: '1rem' }}>{description}</p>
      </div>
    </div>
  );
};

export default InflationCard;
