
const HeroCard = () => {
  return (
    <div
      className="card mb-3"
      style={{
        width: '100%',
        maxWidth: '100%',
        borderRadius: '0',
        overflow: 'hidden',
        height: '400px',
      }}
    >
      <div className="row g-0 h-100">
        <div className="col-md-4 h-100">
          <img
            src="https://africabusiness.com/wp-content/uploads/2016/07/pasted-image-0.png"
            alt="Ethiopian Market"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0',
            }}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center h-100">
          <div
            className="card-body"
            style={{
              padding: '0 50px', // Left and right padding only
              width: '100%',
            }}
          >
            <h5
              className="card-title"
              style={{ fontSize: '2.5rem', marginBottom: '20px' }}
            >
              Unlock Ethiopian Market Insights
            </h5>
            <p className="card-text" style={{ fontSize: '1.1rem' }}>
              Your go-to source for currency exchange rates, commodity market updates,
              local market prices, and inflation data in Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
