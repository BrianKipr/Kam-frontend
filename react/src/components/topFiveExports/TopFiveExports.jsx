// IframeChartComponent.js
import React from 'react';

const TopFiveExports = () => {
  return (
    <iframe
      src="/top_5_products_by_value.html"
      title="Chart"
      style={{ width: '100%', height: '650px', border: 'none' }}
    />
  );
};

export default TopFiveExports;
