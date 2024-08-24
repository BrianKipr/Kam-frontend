import React from 'react';
import Tableauviz from '../tableauviz/Tableauviz'; // Adjust the path based on your project structure
import TopImports from '../topImports/TopImports';
import ProductImports from '../productImports/ProductImports';

export default function Imports() {
  return (
    <div className="p-4 ml-10">
      <h1 className="mb-7 text-3xl font-bold md:text-3xl border-b border-blue-500 text-blue-500 inline-block pb-2">Imports Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <div className="p-4 rounded-lg border border-sky-100 hover:border-sky-500">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Most Imported Products
          </h2>
          <TopImports />
        </div>
        <div className="p-4 rounded-lg border border-sky-100 hover:border-sky-500">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Most Imported Products by Country of Origin
          </h2>
          <ProductImports />
        </div>
      </div>
    </div>
  );
}
