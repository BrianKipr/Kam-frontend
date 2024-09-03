import React from 'react';
import TopFiveExports from '../topFiveExports/TopFiveExports';
import TradingPartners from '../tradingPartners/TradingPartners';

export default function Imports() {
  return (
    <div className="p-4 ml-10">
      <h1 className="mb-7 text-3xl font-bold md:text-3xl border-b border-blue-500 text-blue-500 inline-block pb-2">Exports Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <div className="p-4 rounded-lg border border-sky-100 hover:border-sky-500">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Best Revenue Generators
          </h2>
          <TopFiveExports />
        </div>
        <div className="p-4 rounded-lg border border-sky-100 hover:border-sky-500">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Trading Partners' Performance
          </h2>
          <TradingPartners />
        </div>
      </div>
    </div>
  );
}
