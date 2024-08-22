import React, { useEffect, useState } from 'react';
import Tableauviz from '../tableauviz/Tableauviz';

// Mock functions to simulate data fetching
const fetchRevenue = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ month: 'January', amount: 5000 }, { month: 'February', amount: 7000 }]), 1000)
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
        const cardDataResponse = await fetchCardData();
        
        setRevenue(revenueData);
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
        <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg">
            <h2 className='capitalise'>Distribution of exports By Products</h2>
            <Tableauviz />
          </div>
          <div className=" p-4 rounded-lg">
            <h2>Distribution of imports By Products</h2>
            <Tableauviz />
          </div>
        </div>
      </main>
    </div>
  );
}
