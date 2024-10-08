import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Imports from './components/imports/Imports';
import Exports from './components/exports/Exports';
import SideNav from './ui/Sidenav';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Upload from './components/upload/Upload';
import Docs from './components/docs/Docs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage without the sidebar */}
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        
        {/* Route for dashboard and sub-pages with the sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/imports" element={<Imports />} />
          <Route path="/dashboard/exports" element={<Exports />} />
          <Route path="/dashboard/upload" element={<Upload />} />
          <Route path="/dashboard/docs" element={<Docs />} />
        </Route>
      </Routes>
    </Router>
  );
}

function DashboardLayout() {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-grow p-4">
        <Outlet /> {/* This will render the matched child route */}
      </main>
    </div>
  );
}

export default App;
