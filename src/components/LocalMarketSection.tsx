
const cardBaseStyle:React.CSSProperties = {
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '0px', // flat style like hero
  padding: '20px',
  flex: 1,
  minWidth: '280px',
  margin: '10px',
};

const LocalMarketSection = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f1f5f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
          Local Market Prices in Ethiopia
        </h2>

        {/* Two side-by-side cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={cardBaseStyle}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Agricultural Products</h4>
            <p>
              Find the latest prices for grains, fruits, vegetables, and other essential agricultural products.
            </p>
          </div>
          <div style={cardBaseStyle}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Livestock Prices</h4>
            <p>
              Access up-to-date pricing on cattle, sheep, goats, and other livestock sold in local markets.
            </p>
          </div>
        </div>

        {/* One wide card */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ ...cardBaseStyle, width: '100%' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Consumer Goods</h4>
            <p>
              Stay informed about the prices of everyday consumer goods to manage your budget effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalMarketSection;
