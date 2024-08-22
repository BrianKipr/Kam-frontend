import React from 'react';
import Tableauviz from '../tableauviz/Tableauviz'; // Adjust the path based on your project structure

export default function Imports() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Exports</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-300 rounded-lg">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Distribution of Exports By Products
          </h2>
          <Tableauviz />
        </div>
        <div className="p-4 bg-gray-300 rounded-lg">
          <h2 className='capitalize text-xl font-semibold mb-4'>
            Distribution of Imports By Products
          </h2>
          <Tableauviz />
        </div>
      </div>
    </div>
  );
}
