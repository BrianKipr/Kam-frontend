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
      numberOfInvoices: 120,
      numberOfCustomers: 50,
      totalPaidInvoices: 10000,
      totalPendingInvoices: 2500,
    }), 1000)
  );
};

export default function Dashboard() {
  const [revenue, setRevenue] = useState(null);
  const [latestInvoices, setLatestInvoices] = useState(null);
  const [cardData, setCardData] = useState({
    numberOfInvoices: 0,
    numberOfCustomers: 0,
    totalPaidInvoices: 0,
    totalPendingInvoices: 0,
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
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Collected</h2>
            <p>{cardData.totalPaidInvoices}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Pending</h2>
            <p>{cardData.totalPendingInvoices}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Total Invoices</h2>
            <p>{cardData.numberOfInvoices}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
            <h2>Total Customers</h2>
            <p>{cardData.numberOfCustomers}</p>
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
