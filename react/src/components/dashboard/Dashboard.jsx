import React, { useEffect, useState } from 'react';

// Mock functions to simulate data fetching
const fetchRevenue = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ month: 'January', amount: 5000 }, { month: 'February', amount: 7000 }]), 1000)
  );
};

const fetchLatestInvoices = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([
      { id: 1, date: '2024-08-01', amount: 200 },
      { id: 2, date: '2024-08-05', amount: 450 }
    ]), 1000)
  );
};

const fetchCardData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({
      HsCodes: 120,
      Countries: 50,
      Products: 10000,
      Exports: 2500,
      Imports: 2500,
    }), 1000)
  );
};

export default function Dashboard() {
  const [revenue, setRevenue] = useState(null);
  const [latestInvoices, setLatestInvoices] = useState(null);
  const [cardData, setCardData] = useState({
    HsCodes: 0,
    Countries: 0,
    Products: 0,
    Exports: 0,
    Imports: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const revenueData = await fetchRevenue();
        const latestInvoicesData = await fetchLatestInvoices();
        const cardDataResponse = await fetchCardData();
        
        setRevenue(revenueData);
        setLatestInvoices(latestInvoicesData);
        setCardData(cardDataResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="flex">
      <main className="flex-grow p-4">
        <h1 className="mb-4 text-xl md:text-2xl">
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Hs Codes</h2>
            <p>{cardData.HsCodes}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Countries</h2>
            <p>{cardData.Countries}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Products</h2>
            <p>{cardData.Products}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Exports</h2>
            <p>{cardData.Exports}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Imports</h2>
            <p>{cardData.Imports}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <div className="col-span-1 bg-gray-300 p-4 rounded-lg">
            <h2>Revenue Chart Placeholder</h2>
            {/* Replace this with your actual RevenueChart component */}
            {revenue ? (
              <pre>{JSON.stringify(revenue, null, 2)}</pre>
            ) : (
              <p>Loading revenue data...</p>
            )}
          </div>
          <div className="col-span-1 bg-gray-300 p-4 rounded-lg">
            <h2>Latest Invoices Placeholder</h2>
            {/* Replace this with your actual LatestInvoices component */}
            {latestInvoices ? (
              <pre>{JSON.stringify(latestInvoices, null, 2)}</pre>
            ) : (
              <p>Loading latest invoices...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
