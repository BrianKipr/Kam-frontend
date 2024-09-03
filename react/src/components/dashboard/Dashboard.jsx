import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import * as XLSX from 'xlsx';
import { AiOutlineDownload } from 'react-icons/ai';  // Import the download icon

// Functions to fetch data from the Flask backend
const fetchHsCodes = async () => {
  const response = await fetch('http://127.0.0.1:5555/hscodes');
  const data = await response.json();
  return Array.isArray(data) ? data.length : 0; // Assuming data is an array
};

const fetchCountries = async () => {
  const response = await fetch('http://127.0.0.1:5555/countries');
  const data = await response.json();
  return Array.isArray(data) ? data.length : 0; // Assuming data is an array
};

const fetchProducts = async () => {
  const response = await fetch('http://127.0.0.1:5555/products');
  const data = await response.json();
  return data; // Return entire data if needed for further processing
};

const fetchExports = async () => {
  const response = await fetch('http://127.0.0.1:5555/exports');
  const data = await response.json();
  return Array.isArray(data) ? data : []; // Assuming data is an array
};

const fetchImports = async () => {
  const response = await fetch('http://127.0.0.1:5555/import');
  const data = await response.json();
  return Array.isArray(data) ? data : []; // Assuming data is an array
};

// Replace updateCountriesFromProducts with fetchAnalyzedCountries
const fetchAnalyzedCountries = async () => {
  const response = await fetch('http://127.0.0.1:5555/analyzed-countries');
  const data = await response.json();
  return Array.isArray(data) ? data.length : 0; // Assuming data is an array
};

export default function Dashboard() {
  const [cardData, setCardData] = useState({
    HsCodes: 0,
    Countries: 0,
    Products: 0,
    Exports: [],
    Imports: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        const countriesCount = await fetchAnalyzedCountries();

        const [hsCodesCount, exportsData, importsData] = await Promise.all([
          fetchHsCodes(),
          fetchExports(),
          fetchImports(),
        ]);

        setCardData({
          HsCodes: hsCodesCount,
          Countries: countriesCount,
          Products: productsData.length,
          Exports: exportsData,
          Imports: importsData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Process data for Plotly charts
  const exportShortDescCounts = cardData.Exports.reduce((acc, curr) => {
    acc[curr.SHORT_DESC] = (acc[curr.SHORT_DESC] || 0) + 1;
    return acc;
  }, {});

  const importShortDescCounts = cardData.Imports.reduce((acc, curr) => {
    acc[curr.hscode_description] = (acc[curr.hscode_description] || 0) + 1;
    return acc;
  }, {});

  const exportShortDescNames = Object.keys(exportShortDescCounts);
  const exportShortDescValues = Object.values(exportShortDescCounts);
  
  const importShortDescNames = Object.keys(importShortDescCounts);
  const importShortDescValues = Object.values(importShortDescCounts);

  // Function to download XLSX file
  const downloadXLSX = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, filename);
  };

  return (
    <div className="flex">
      <main className="flex-grow p-4">
        <h1 className="mb-7 text-3xl font-bold md:text-3xl border-b border-blue-500 text-blue-500 inline-block pb-2">Dashboard Summary</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center p-4 bg-sky-100 rounded-lg">
            <h2 className='text-xl font-bold'>HS Codes</h2>
            <p className='text-lg font-bold'>{cardData.HsCodes}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-sky-100 rounded-lg">
            <h2 className='text-xl font-bold'>Countries</h2>
            <p className='text-lg font-bold' >{cardData.Countries} of 249</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-sky-100 rounded-lg">
            <h2 className='text-xl font-bold'>Products</h2>
            <p className='text-lg font-bold'>{cardData.Products}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-sky-100 rounded-lg">
            <h2 className='text-xl font-bold'>Exports</h2>
            <p className='text-lg font-bold'>{cardData.Exports.length}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-sky-100 rounded-lg">
            <h2 className='text-xl font-bold'>Imports</h2>
            <p className='text-lg font-bold'>{cardData.Imports.length}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative p-4 rounded-lg border border-sky-100 hover:border-sky-500 bg-blue-100">
            <Plot
              data={[
                {
                  x: exportShortDescNames,
                  y: exportShortDescValues,
                  type: 'bar',
                  marker: { color: 'lightcoral' },
                },
              ]}
              layout={{
                title: 'Distribution Of Exports By HS CODE',
                xaxis: { title: 'Short Description of HS CODE' },
                yaxis: { title: 'Number of Exports' },
              }}
            />
            <button
              onClick={() => downloadXLSX(cardData.Exports, 'exports_data.xlsx')}
              className="absolute bottom-4 left-4 text-blue-500 border border-blue-500 hover:text-white py-1 px-4 rounded hover:bg-blue-700 flex items-center"
            >
              <AiOutlineDownload className="mr-2" />  {/* Icon with some right margin */}
              Download
            </button>
          </div>
          <div className="relative p-4 rounded-lg border border-sky-100 hover:border-sky-500 bg-blue-100">
            <Plot
              data={[
                {
                  x: importShortDescNames,
                  y: importShortDescValues,
                  type: 'bar',
                  marker: { color: 'skyblue' },
                },
              ]}
              layout={{
                title: 'Distribution Of Imports By HS CODE',
                xaxis: { title: 'Short Description of HS CODE' },
                yaxis: { title: 'Number of Imports' },
              }}
            />
            <button
              onClick={() => downloadXLSX(cardData.Imports, 'imports_data.xlsx')}
              className="absolute bottom-4 left-4 text-blue-500 border border-blue-500 hover:text-white py-1 px-4 rounded hover:bg-blue-700 flex items-center"
            >
              <AiOutlineDownload className="mr-2" />  {/* Icon with some right margin */}
              Download
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
