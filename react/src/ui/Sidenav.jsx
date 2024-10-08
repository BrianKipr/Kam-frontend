import React from 'react';
import NavLinks from './Navlinks';
import { useNavigate } from 'react-router-dom';

export default function SideNav() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform any sign-out logic here, such as clearing user data or tokens.
    
    // Redirect to the home page after signing out.
    navigate('/');
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <a
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-24 text-white md:w-32"> {/* Adjust width here */}
          <img
            src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg"
            alt="logo"
            className="w-full h-auto"  // This makes the image responsive and scales with the container
          />
        </div>
      </a>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-8">
        <NavLinks />

        <form>
          <button
            type="button"
            onClick={handleSignOut}  // Call handleSignOut on button click
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <div className="">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
