// IframeChartComponent.js
import React from 'react';

const TradingPartners = () => {
  return (
    <iframe
      src="/trading_partners_by_fob_value.html"
      title="Chart"
      style={{ width: '100%', height: '640px', border: 'none' }}
    />
  );
};

export default TradingPartners;
