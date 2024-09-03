import React, { useState } from 'react';

function Docs() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b border-blue-500 inline-block mb-8">Documentation</h1>

      <div className="space-y-4">
        <div>
          <h2
            onClick={() => toggleSection('home')}
            className="text-xl font-semibold cursor-pointer"
          >
            Home
          </h2>
          {openSection === 'home' && (
            <p className="mt-2 pl-4">
              The <strong>Homepage</strong> is the landing page of the application. It provides an overview or introduction to the platform without the need for user authentication.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('login')}
            className="text-xl font-semibold cursor-pointer"
          >
            Login
          </h2>
          {openSection === 'login' && (
            <p className="mt-2 pl-4">
              The <strong>Login</strong> allows users to authenticate themselves by entering their credentials. Upon successful login, they gain access to the <strong>SECURE</strong> dashboard and other restricted pages.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('register')}
            className="text-xl font-semibold cursor-pointer"
          >
            Register
          </h2>
          {openSection === 'register' && (
            <p className="mt-2 pl-4">
              The <strong>Register</strong> component enables new users to create an account. This component typically includes form fields for user information and validation to ensure data integrity.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('dashboardLayout')}
            className="text-xl font-semibold cursor-pointer"
          >
            Dashboard Layout
          </h2>
          {openSection === 'dashboardLayout' && (
            <p className="mt-2 pl-4">
              The <strong>Dashboard Summary</strong> serves as a wrapper for the dashboard and its sub-pages. It includes the sidebar for easy navigation across the portal's features like exports and imports.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('dashboard')}
            className="text-xl font-semibold cursor-pointer"
          >
            Dashboard Summary
          </h2>
          {openSection === 'dashboard' && (
            <p className="mt-2 pl-4">
              The <strong>Dashboard Summary</strong> provides a data summary of the database the system uses.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('imports')}
            className="text-xl font-semibold cursor-pointer"
          >
            Imports
          </h2>
          {openSection === 'imports' && (
            <p className="mt-2 pl-4">
              The <strong>Imports</strong> section displays analyzed data related to imports, allowing users to view and manage imported items or records.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('exports')}
            className="text-xl font-semibold cursor-pointer"
          >
            Exports
          </h2>
          {openSection === 'exports' && (
            <p className="mt-2 pl-4">
              The <strong>Exports</strong> section shows analyzed data related to imports, helping users understand and manage exported items or records.
            </p>
          )}
        </div>

        <div>
          <h2
            onClick={() => toggleSection('upload')}
            className="text-xl font-semibold cursor-pointer"
          >
            Upload
          </h2>
          {openSection === 'upload' && (
            <p className="mt-2 pl-4">
              The <strong>Upload</strong> section allows users to upload files, such as spreadsheets, that will be processed and integrated into the system.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Docs;